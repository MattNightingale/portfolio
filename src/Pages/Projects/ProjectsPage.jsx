import styles from "./ProjectsPage.module.css";
import Projects from "../../Components/Projects/Projects.jsx";
import { useEffect } from "react";

function ProjectsPage() {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className={styles.wrapper}>
      <Projects />
    </div>
  );
}

export default ProjectsPage;
