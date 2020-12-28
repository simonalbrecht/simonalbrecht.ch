import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query SiteMetadataQuery {
    site {
      metadata: siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO = ({ title, lang, meta }) => {
  const { site } = useStaticQuery(query);

  const defaultTitle = site.metadata.title;
  const { description } = site.metadata;
  const { author } = site.metadata;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: 'charset',
          content: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'initial-scale=1.0, width=device-width',
        },
        {
          name: 'description',
          content: description,
        },
        {
          name: 'author',
          content: author,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  title: '',
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
