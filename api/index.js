const Negotiator = require('negotiator');
const { siteMetadata } = require('../gatsby-config');
const { i18n } = siteMetadata;

module.exports = (req, res) => {
  const negotiator = new Negotiator(req);
  const language = negotiator.language(i18n.locales);

  res.redirect(`/${language}`);
};
