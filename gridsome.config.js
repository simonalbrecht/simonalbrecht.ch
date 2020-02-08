module.exports = {
  siteName: 'Simon Albrecht',
  siteDescription: 'Simon Albrecht is a Zurich-based Full-Stack Software Engineer.',
  siteUrl: 'https://simonalbrecht.ch',
  titleTemplate: 'Simon Albrecht | %s',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/pages/*.md',
        typeName: 'Standalone',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      config: {
        exclude: ['/index'],
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ],
  templates: {
    Standalone: '/:id',
  },

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
