import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/header-style.css';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" width="52px" />
      <div className="header__button-container">
        <a className="header__button" href="#about">
          About
        </a>
        <a className="header__button" href="#projects">
          Projects
        </a>
        <a className="header__button" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}
