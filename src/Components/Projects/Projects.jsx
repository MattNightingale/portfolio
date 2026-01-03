import styles from "./Projects.module.css";
import { ProjectCard } from "../../Components/ProjectCard/ProjectCard.jsx";
import projects from "../../data/projects.json";

function Projects() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.carousel}>
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