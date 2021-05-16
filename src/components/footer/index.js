/* 
  Global Footer Component
  Footer is pulling configuration from a config file
  which can be adjusted as per requirement
*/

// Libraries
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Footer = (props) => {
  const footer  = props.config;
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright-text">{footer.copyrightText}</p>
        <nav className="footer-navigation">
          {footer.navItems.map(item => {
            return <Link to={item.link} className="footer-link">{item.title}</Link>
          })}
        </nav>
      </div>
    </footer>
  );
}

export default memo(Footer);