import React from 'react';
import PropTypes from 'prop-types';
import b from 'bem-react-helper';

const propTypes = {
  mods: PropTypes.shape({
    type: PropTypes.oneOf([
      'clear',
      'sharp',
    ]),
  }),
  mix: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  mods: {},
  mix: undefined,
};

const KeyButton = React.memo(({ children, mods, mix }) => (
  <button
    className={b('key-button', { mods, mix })}
    type="button"
  >
    {children}
  </button>
));

KeyButton.propTypes = propTypes;
KeyButton.defaultProps = defaultProps;

KeyButton.displayName = 'KeyButton';

export { KeyButton };
