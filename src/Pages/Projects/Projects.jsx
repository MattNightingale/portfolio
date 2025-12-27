import styles from "./Projects.module.css";
import { ProjectCard } from "../../Components/ProjectCard/ProjectCard.jsx";
import projects from "../../assets/projects.json";

function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <h2 className={styles.title}>Projects </h2>
        {projects.map((p) => (
          <ProjectCard
            key={p.name}
            title={p.name}
            description={p.description}
            link={p.link}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
