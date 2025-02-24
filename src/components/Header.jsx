import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">⭘</div>

      {/* Navegación con enlaces internos */}
      <nav>
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>

      {/* Iconos de LinkedIn y GitHub */}
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </header>
  );
}

export default Header;
