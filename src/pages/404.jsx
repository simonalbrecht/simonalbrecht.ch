import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Page from '../components/Page';

export const query = graphql`
  query NotFoundPageQuery {
    page: contentfulPage(slug: { eq: "404" }) {
      id
      title
      intro {
        content: childMarkdownRemark {
          html
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

const NotFoundPage = ({ data }) => {
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

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NotFoundPage;
