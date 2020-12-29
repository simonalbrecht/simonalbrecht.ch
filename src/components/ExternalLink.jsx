import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ title, url, children }) => {
  return (
    <a
      className="flex-initial mr-4 text-text-dark dark:text-text-light hover:text-accent-dark dark:hover:text-accent-light hover: border-0 hover:border-0 opacity-75 hover:opacity-100"
      href={url}
      title={title}
      target="_blank"
      rel="nofollow, noopener, noreferrer"
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ExternalLink;
