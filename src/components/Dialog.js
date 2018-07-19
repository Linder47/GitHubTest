import React from 'react';
import PropTypes from 'prop-types';

const Dialog = props => (
  <div>Hi! {props.elem.url}
    {props.elem.fork ? props.elem.forks_url : null}
  </div>
);

Dialog.propTypes = {
  elem: PropTypes.instanceOf(Object).isRequired,
};

export default Dialog;
