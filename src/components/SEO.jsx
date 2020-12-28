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

const SEO = ({ title, description, lang, meta }) => {
  const { site } = useStaticQuery(query);
  const { metadata } = site;

  const defaultTitle = metadata.title;
  const metaDescription = description ? description : metadata.description;
  const metaAuthor = metadata.author;

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
          content: metaDescription,
        },
        {
          name: 'author',
          content: metaAuthor,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  title: '',
  description: '',
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
