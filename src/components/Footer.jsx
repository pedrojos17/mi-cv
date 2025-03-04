import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p>Contáctame:</p>
      <div className="social-icons">
        <a href="https://github.com/pedrojos17" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        {/* Botón para descargar el CV con un icono más notorio */}
        <a href="/CurriculumPedroJose.pdf" download className="cv-download">
          <FaFilePdf className="icon cv-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
