import { motion } from "framer-motion";
import "./AboutMe.css";

const skillsRow1 = [
  "Web Development",
  "UI/UX Design",
  "React",
  "Node.js",
  "MongoDB",
  "REST APIs",
];

const skillsRow2 = [
  "JavaScript",
  "CSS Animations",
  "Java",
  "Firebase",
  "Responsive Design",
  "Git & GitHub",
];

// Configuración de animaciones
const textContainer = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.15 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const underlineAnimation = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

function AboutMe() {
  return (
    <section className="about-me-container">
      {/* Texto principal con animaciones */}
      <motion.div
        className="about-me-text"
        initial="hidden"
        animate="visible"
        variants={textContainer}
      >
        <h2>
          <motion.span variants={textItem} className="highlight">
            Sigue
          </motion.span>{" "}
          <motion.span variants={textItem}>el</motion.span>{" "}
          <motion.span
            variants={textItem}
            className="underline-container"
          >
            viaje de mi crecimiento
            <motion.span
              className="underline"
              variants={underlineAnimation}
            />
          </motion.span>{" "}
          <motion.span variants={textItem}></motion.span>{" "}
          <motion.span variants={textItem} className="highlight">
            profesional
          </motion.span>
        </h2>
        <motion.p variants={textItem}>
        Con experiencia en la creación de aplicaciones multiplataforma que conectan a los usuarios en todos los dispositivos.
        </motion.p>
      </motion.div>

      {/* Texto en movimiento en dos filas */}
      <div className="scrolling-text">
        <motion.div
          className="scrolling-row left"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {skillsRow1.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </motion.div>

        <motion.div
          className="scrolling-row right"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {skillsRow2.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
