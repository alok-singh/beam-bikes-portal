/* 
  Global Header Component
  Header is pulling configuration from a config file
  which can be adjusted as per requirement
*/

import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = (props) => {
  const header = props.config;
  return (
    <header className="header">
      <div className="header-container">
        <Link to={header.logo.link} className="logo-link">
          <img src={header.logo.imageSrc} alt="" className="logo-image" />
        </Link>
        <nav className="header-navigation">
          {header.navItems.map(item => {
            return <Link to={item.link} className="header-link">{item.title}</Link>
          })}
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);