import TechStack from "../../Components/TechStack/TeckStack";
import styles from "./AboutPage.module.css";
import About from "../../Components/About/About.jsx";
import { useEffect } from "react";


function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.wrapper}>
      <About />
    </div>
  );
}

export default AboutPage;
