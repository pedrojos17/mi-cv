import React from "react";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="inicio-container">
      <nav className="navbar">
        <div className="logo">⭘</div>
        <ul>
          <li>about</li>
          <li>book</li>
          <li>portfolio</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </nav>

      <div className="hero-content">
        <div className="left-side">
          <h1>designer</h1>
          <p>Product designer specializing in UI design and design systems.</p>
        </div>

        <div className="profile-img">
          <img
            src="/perfil-dividido.png"
            alt="perfil dividido"
          />
        </div>

        <div className="right-side">
          <h1>&lt;coder&gt;</h1>
          <p>Front end developer who writes clean, elegant and efficient code.</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
