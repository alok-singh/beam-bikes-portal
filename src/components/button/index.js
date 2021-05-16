/* 
  Button Component
  can accepts all kind of props
  HTML5 can accepts

  Configure this component for any
  common cofiguration which is required 
  everywhere in the application
*/

import React, { memo } from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <button {...props} className="custom-button">{props.text}</button>
  )
}

export default memo(Button);