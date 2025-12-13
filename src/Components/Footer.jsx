import React from 'react';
import './Footer.css';

const userName = 'Naveen Kumar';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <p className="text-sm">© {new Date().getFullYear()} {userName}. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
