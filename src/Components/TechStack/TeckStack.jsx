import styles from './TeckStack.module.css';
import skills from '../../data/skills.json';

function TechStack() {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Tech Stack</h2>
        <div className={styles.techList}>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.techItem}>
            <p className={styles.techName}>{skill.name}</p>
          <img src={skill.icon} alt={skill.name} className={styles.icon} />
            </div>
    ))} 
    </div>
    </div>
  );
}

export default TechStack;