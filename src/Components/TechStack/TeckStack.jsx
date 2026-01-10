import styles from "./TeckStack.module.css";
import skills from "../../data/skills.json";
import { SlideInFromLeft, SlideInFromRight } from "../Animations/Animations";

function TechStack() {
  return (
    <div className={styles.wrapper}>
      <SlideInFromRight fullWidth delay={0.2}>
      <h2 className={styles.title}>Tech Stack</h2>
      </SlideInFromRight>
      <SlideInFromLeft fullWidth delay={0.4}>
      <div className={styles.techList}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.techItem}>
            <p className={styles.techName}>{skill.name}</p>
            <img src={skill.icon} alt={skill.name} className={styles.icon} />
          </div>
        ))}
      </div>
      </SlideInFromLeft>
    </div>
  );
}

export default TechStack;
