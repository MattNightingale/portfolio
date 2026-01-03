import styles from "./ProjectsPage.module.css";
import Projects from "../../Components/Projects/Projects.jsx";

function ProjectsPage() {
  return (
    <div className={styles.wrapper}>
      <Projects />
    </div>
  );
}

export default ProjectsPage;
