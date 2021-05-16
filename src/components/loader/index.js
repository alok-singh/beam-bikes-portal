/* 
  Loading indicator Component
  No need to use memoization 
  as it doesn't have any props
*/

import React from 'react';
import './styles.css';

const LoadingIndicator = () => (
  <div className="loader-container">
    <div class="loader"></div>
  </div>
);

export default LoadingIndicator;