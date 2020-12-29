import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  fill: currentColor;
`;

const Icon = ({ title, svg }) => {
  const svgMarkup = {
    __html: svg,
  };
  return (
    <IconWrapper className="h-6 w-6 fill-current" alt={title} dangerouslySetInnerHTML={svgMarkup} />
  );
};

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};

export default Icon;
