// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div><img src="../icons/title-logo.png" className="header-title" alt="Mental Mate" /></div>

      <nav className="header-nav">
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
