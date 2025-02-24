import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    name: "ufc_proyect",
    description: "Proyecto sobre el desarrollo de una app en Kotlin para crear rutinas de entrenamiento.",
    github: "https://github.com/pedrojos17/UFC_proyecto", // Enlace a tu repositorio de GitHub
  },
  {
    name: "NinjaJump",
    description: "Juego de plataforma en 2D en Godot, donde un ninja salta y esquiva obstáculos y lanza shurikens.",
    github: "https://github.com/pedrojos17/FP_AplicacionesMoviles", // Enlace a tu repositorio de GitHub
  }
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
