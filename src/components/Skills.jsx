import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { FaJava, FaGithub } from "react-icons/fa"; // Agregar iconos de Java y GitHub
import { SiKotlin, SiSqlite, SiGodot } from "react-icons/si"; // Agregar iconos de Kotlin, SQL y Godot
import "./Skills.css";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", level: 4 },
  { icon: <FaCss3Alt />, name: "CSS", level: 4 },
  { icon: <FaJs />, name: "JavaScript", level: 3 },
  { icon: <FaReact />, name: "React", level: 3 },
  { icon: <FaNodeJs />, name: "Node.js", level: 2 },
  { icon: <FaPython />, name: "Python", level: 4 },
  { icon: <SiKotlin />, name: "Kotlin", level: 4 }, // Kotlin
  { icon: <FaJava />, name: "Java", level: 5 }, // Java
  { icon: <SiSqlite />, name: "SQL", level: 5 }, // SQL
];

function Skills() {
  const renderStars = (level) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`star ${i < level ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="skills-container">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="skills-title"
      >
        
      </motion.h2>

      <motion.div
        className="skills-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="skills-row">
          {skills.slice(0, 5).map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
              <div className="stars">{renderStars(skill.level)}</div>
            </motion.div>
          ))}
        </div>

        <div className="skills-row">
          {skills.slice(5).map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
              <div className="stars">{renderStars(skill.level)}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
