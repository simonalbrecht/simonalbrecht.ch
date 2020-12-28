import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from './ExternalLink';
import Icon from './Icon';

const Page = ({ intro, body, links = [] }) => {
  const htmlIntro = {
    __html: intro,
  };
  const htmlBody = {
    __html: body,
  };

  return (
    <div>
      <header className="flex-auto">
        {intro && (
          <h1 className="font-bold text-3xl md:text-6xl" dangerouslySetInnerHTML={htmlIntro} />
        )}
      </header>
      <hr className="mb-8 md:mb-8 mt-8 border-2 md:border-2 w-2/6 md:w-1/4 border-accent-dark dark:border-accent-light" />

      <section
        className="flex-auto mb-8 leading-normal font-light"
        dangerouslySetInnerHTML={htmlBody}
      />

      <footer className="flex flex-row mb-4">
        {links &&
          links.map((link) => (
            <ExternalLink title={link.title} url={link.url} key={link.title}>
              <Icon title={link.title} svg={link.icon.file.svg.content} />
            </ExternalLink>
          ))}
      </footer>
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  intro: PropTypes.string,
  links: PropTypes.array,
};

export default Page;
