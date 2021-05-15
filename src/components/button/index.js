import React from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <button {...props} className="custom-button">{props.text}</button>
  )
}

export default Button;