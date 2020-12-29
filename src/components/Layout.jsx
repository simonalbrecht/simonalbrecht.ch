import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import LocaleSwitcher from './LocaleSwitcher';

const Layout = ({ locale, locales, switchLocale, children }) => {
  return (
    <>
      <Helmet>
        <body className="min-w-full min-h-full max-w-full w-screen font-sans antialised bg-body-light text-text-dark dark:bg-body-dark dark:text-text-light" />
      </Helmet>
      <LocaleSwitcher currentLocale={locale} locales={locales} switchLocale={switchLocale} />
      <div className="container mx-auto min-w-full min-h-full max-w-full flex flex-col justify-center">
        <div className="container md:max-w-4xl px-4 sm:px-12">{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  locale: PropTypes.string.isRequired,
  locales: PropTypes.arrayOf(PropTypes.string),
  switchLocale: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Layout;
