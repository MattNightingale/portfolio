import styles from "./Home.module.css";
import About from "../../Components/About/About.jsx";
import Projects from "../../Components/Projects/Projects.jsx";
import { useEffect } from "react";

function Home() {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.wrapper}>
      <About />
      <Projects />
    </div>
  );
}

export default Home;
