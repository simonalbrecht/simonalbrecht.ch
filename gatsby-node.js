const { siteMetadata } = require('./gatsby-config');
const { i18n } = siteMetadata;
const isDev = process.env.NODE_ENV === 'development';

// Fired for every page in src/pages
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions;
  const path = page.path;
  const strippedPath = path.replace(/\/$/, '');

  // Ignore excluded paths (eg. dev 404 page)
  if (i18n.excludedPaths.includes(path)) {
    return;
  }

  console.log(`Generating localized version of page ${path}...`);

  // Delete the original page entry as we will redirect from the root to the
  // default locale version
  await deletePage(page);
  console.log(`Deleted non-localized page entry for page ${path}`);

  // Create localised versions with template + context
  await Promise.all(
    i18n.locales.map(async (locale) => {
      const localizedPath = `/${locale}${strippedPath}`;

      // Map the URL path to the Contentful slug
      const slug = i18n.pathSlugMapping[path] || i18n.defaultSlug;

      await createPage({
        path: localizedPath,
        component: require.resolve(`./src/templates/PageTemplate.jsx`),
        context: {
          ...page.context,
          slug,
          locale: locale,
        },
      });

      console.log(`Created localized version of ${path} for locale ${locale}`);

      // Redirect original path to default locale one
      await createRedirect({
        fromPath: path,
        toPath: localizedPath,
        Language: locale,
        isPermanent: false,
        redirectInBrowser: isDev,
      });

      console.log(`Created redirect from ${path} to ${localizedPath} for ${locale} locale`);
    }),
  );

  // Create fallback redirect to default locale
  const defaultLocalePath = `/${i18n.defaultLocale}${strippedPath}`;
  await createRedirect({
    fromPath: path,
    toPath: defaultLocalePath,
    isPermanent: false,
    redirectInBrowser: isDev,
  });

  console.log(`Created fallback redirect for ${path} to default locale at ${defaultLocalePath}`);
};
