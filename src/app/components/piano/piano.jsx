import React from 'react';
import PropTypes from 'prop-types';
import b from 'bem-react-helper';



const propTypes = {
  mix: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  mix: undefined,
};

const Piano = React.memo(({ children, mix }) => (
  <div className={b('key-button', { mix })}>
    {children}
  </div>
));

Piano.propTypes = propTypes;
Piano.defaultProps = defaultProps;

Piano.displayName = 'Piano';

export { Piano };
