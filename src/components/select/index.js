/* 
  Select Component
  
  All common configuration related to select
  has to be done in this file
*/

import React, { memo } from 'react';
import './styles.css';

const Select = (props) => {
  const {lable, optionList, value = "", onChange} = props;
  return (
    <div className="select-container">
      {lable ? <lable>{lable}</lable> : null}
      <select onChange={({target}) => onChange(target.value)}>
        <option value="" selected={value === ""}>Select one...</option>
        {optionList.map((option, index) => {
          return <option value={index} selected={value === index} >{option.name}</option>
        })}
      </select>
    </div>
  )
}

export default memo(Select);