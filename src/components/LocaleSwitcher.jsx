import React from 'react';
import PropTypes from 'prop-types';

const LocaleSwitcher = ({ currentLocale = 'en', locales = [], switchLocale = () => {} }) => {
  return (
    <div className="fixed top-0 right-0 p-4 text-sm">
      {locales &&
        locales.map((locale, index, all) => {
          const hasMoreElements = index < all.length - 1;
          const isActive = locale === currentLocale;
          const classes = [
            'mr-2',
            'opacity-75',
            'hover:opacity-100',
            'cursor-pointer',
            'border-solid',
            'border-b-2',
            'border-transparent',
            'transition-all',
            'ease-in-out',
            'duration-300',
            'hover:border-accent-dark',
            'dark:hover:border-accent-light',
          ];

          if (isActive) {
            classes.push('border-accent-dark');
            classes.push('dark:border-accent-light');
          }

          return (
            <span key={locale}>
              <span onClick={() => switchLocale(locale)} className={classes.join(' ')}>
                {locale.toUpperCase()}
              </span>
              {hasMoreElements && <span className="mr-2 opacity-75 cursor-default">|</span>}
            </span>
          );
        })}
    </div>
  );
};

LocaleSwitcher.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  locales: PropTypes.arrayOf(PropTypes.string),
  switchLocale: PropTypes.func.isRequired,
};

export default LocaleSwitcher;
