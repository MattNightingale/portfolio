import styles from "./Home.module.css";
import About from "../../Components/About/About.jsx";
import Projects from "../../Components/Projects/Projects.jsx";

function Home() {
  return (
    <div className={styles.wrapper}>
      <About />
      <Projects />
    </div>
  );
}

export default Home;
