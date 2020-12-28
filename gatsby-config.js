require('dotenv').config();

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;

const title = 'Simon Albrecht';

module.exports = {
  siteMetadata: {
    title,
    author: 'Simon Albrecht',
    description: 'Simon Albrecht is a Software Engineer based in Zurich.',
    siteUrl: 'https://simonalbrecht.ch',
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'de'],
      excludedPaths: ['/dev-404-page/'],
      pathSlugMapping: {
        '/': 'index',
        '/404/': '404',
      },
      defaultSlug: 'index',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: CONTENTFUL_SPACE_ID,
        downloadLocal: true,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-135263577-1',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        start_url: '/',
        background_color: '#17181c',
        theme_color: '#F79F1F',
        display: 'standalone',
        icon: './src/assets/images/logo.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/logo.png',
      },
      __key: 'images',
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-inline-svg-v2',
    'gatsby-plugin-meta-redirect',
  ],
};
