import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";
import "./Projects.css";
import ufcImage from './ufc.png'; // Ruta relativa a la carpeta src
import ninjaImage from './ninja.png'; // Ruta relativa a la carpeta src

const projects = [
  {
    name: "ufc_proyect",
    description: "Proyecto  en Kotlin para crear rutinas.",
    github: "https://github.com/pedrojos17/UFC_proyecto",
    image: ufcImage,  // Usamos la variable importada
  },
  {
    name: "NinjaJump",
    description: "Juego de plataforma en 2D en Godot.",
    github: "https://github.com/pedrojos17/FP_AplicacionesMoviles",
    image: ninjaImage,  // Usamos la variable importada
  },
];


function Projects() {
  return (
    <section className="projects-container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
      </motion.h2>

      <div className="projects-cards">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="social-icons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="github-icon" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
