import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Page from '../components/Page';

export const query = graphql`
  query PageQuery($slug: String!, $locale: String = "en") {
    page: contentfulPage(
      slug: { eq: $slug }
      node_locale: { eq: $locale }
      description: { childMarkdownRemark: {} }
    ) {
      id
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
  const { page } = data;
  const { title = '', links = [] } = page;
  const body = page.body.content.html;
  const intro = page.intro ? page.intro.content.html : '';
  const description = page.description ? page.description.content.raw : '';

  return (
    <Layout>
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
