import React from 'react';
import "../../src/style.css";  // Make sure this points to your CSS file location

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Pixabay Clone. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
