import React from 'react';
import PropTypes from 'prop-types';
import b from 'bem-react-helper';

const propTypes = {
  mods: PropTypes.shape({
    level: PropTypes.oneOf([
      1, 2, 3, 4, 5, 6,
    ]),
  }),
  mix: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  mods: {},
  mix: undefined,
};

const Title = React.memo(({ children, mods, mix }) => (
  <h1 className={b('title', { mods, mix })}>
    {children}
  </h1>
));

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

Title.displayName = 'Title';

export { Title };
