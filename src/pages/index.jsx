import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Page from '../components/Page';

export const query = graphql`
  query HomePageQuery {
    page: contentfulPage(slug: { eq: "home" }) {
      id
      title
      intro {
        content: childMarkdownRemark {
          html
        }
      }
      links {
        url
        title
        icon {
          file: localFile {
            publicURL
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

const IndexPage = ({ data }) => {
  const { page } = data;
  const { title = '', links = [] } = page;
  const body = page.body.content.html;
  const intro = page.intro.content.html;

  return (
    <Layout>
      <SEO title={title} />
      <Page title={title} intro={intro} body={body} links={links} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
