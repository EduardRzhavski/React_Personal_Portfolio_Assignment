import React from 'react';
import "./footer.css"
const Footer = () => {
  const x = {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    left: 0,
  }
  return (
    <footer className='footer-container' style={x}>
      <p>&copy; 2023 Eduard Rzhavski. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

