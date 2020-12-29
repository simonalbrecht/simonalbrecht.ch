import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Page from '../components/Page';

export const query = graphql`
  query PageQuery($slug: String!, $locale: String = "en") {
    i18n: site {
      siteMetadata {
        i18n {
          locales
        }
      }
    }
    page: contentfulPage(
      slug: { eq: $slug }
      node_locale: { eq: $locale }
      description: { childMarkdownRemark: {} }
    ) {
      id: contentful_id
      title
      intro {
        content: childMarkdownRemark {
          html
        }
      }
      description {
        content: childMarkdownRemark {
          raw: rawMarkdownBody
        }
      }
      links {
        id: contentful_id
        url
        title
        icon {
          file: localFile {
            svg: childInlineSvg {
              content
            }
          }
        }
      }
      body {
        content: childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const PageTemplate = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { page, i18n } = data;
  const { title = '', links = [] } = page;
  const body = page.body.content.html;
  const intro = page.intro ? page.intro.content.html : '';
  const description = page.description ? page.description.content.raw : '';
  const locales = i18n.siteMetadata.i18n.locales;

  const switchLocale = (locale) => {
    const { pathname: path } = new URL(window.location.href);

    // eg replace /de/foobar or /de with /en => /en/foobar or /en
    const targetPath = path.replace(/^\/([a-z]{2})(\/)?/, `/${locale}$2`);

    window.location.replace(targetPath);
  };

  return (
    <Layout locale={locale} locales={locales} switchLocale={switchLocale}>
      <SEO title={title} description={description} lang={locale} />
      <Page title={title} intro={intro} body={body} links={links} />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;
