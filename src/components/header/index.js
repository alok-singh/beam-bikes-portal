import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/bike-finder" className="logo-link">
          <img src="https://global-uploads.webflow.com/5b685812f109cf81a7d99e25/606e8f3eb8613d4f91dc33e5_beam_whitecir_rgb.png" alt="" className="logo-image" />
        </Link>
        <nav className="header-navigation">
          <Link to="/bike-finder" className="header-link">Bike Finder</Link>
          <Link to="/bike-generator" className="header-link">Bike Generator</Link>
          <Link to="/career" className="header-link">Careers</Link>
          <Link to="/highlights" className="header-link">The Highlight</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;