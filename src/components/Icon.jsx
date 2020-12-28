import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SvgIcon = styled.svg`
  display: inline;
  height: 1.5rem;
  width: 1.5rem;
  fill: currentColor;
`;

const Icon = ({ title, svg }) => {
  const svgMarkup = {
    __html: svg,
  };
  return (
    <div className="h-6 md:h-6 w-auto fill-current">
      <SvgIcon alt={title} className="" dangerouslySetInnerHTML={svgMarkup} />
    </div>
  );
};

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  svg: PropTypes.string.isRequired,
};

export default Icon;
