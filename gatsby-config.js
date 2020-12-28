const title = 'Simon Albrecht';

module.exports = {
  siteMetadata: {
    title,
    author: 'Simon Albrecht',
    description: 'Simon Albrecht is a Zurich-based Full-Stack Software Engineer.',
    siteUrl: 'https://simonalbrecht.ch',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'JPhCA0eLMNeoog1hk-iFLiJ4LaeMGb9b96sG8qJeLb8',
        spaceId: 'ny19uu2xl2dl',
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
  ],
};
