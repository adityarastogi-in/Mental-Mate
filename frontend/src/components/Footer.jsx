// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-contact">
        {/* <span className="contact-item">
           +91 9643479489
        </span> */}
        <a href="mailto:adityarastogi.in@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="../icons/mail.png" alt="e-mail" />
        </a>
        <a href="https://www.linkedin.com/in/aditya-rastogi-944b2028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-item">
            <img src="../icons/linkedin.png" alt="linked-in" />
        </a>
        <a href="https://www.instagram.com" rel="noopener noreferrer" className="contact-item">
            <img src="../icons/instagram.png" alt="instagram" />
        </a>
      </div>
      
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Mental Mate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
