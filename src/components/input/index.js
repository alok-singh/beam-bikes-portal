/* 
  Input Component
  
  All common configuration related to input box
  has to be done in this file
*/

import React, { memo } from 'react';
import './styles.css';

const Input = (props) => {
  return (
    <div className="input-container">
      {props.lable ? <lable>{props.lable}</lable> : null}
      <input {...props} className="custom-input" value={props.value} placeholder={props.placeholder} />
    </div>
  )
}

export default memo(Input);