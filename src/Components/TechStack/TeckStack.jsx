import styles from './TeckStack.module.css';
import skills from '../../data/skills.json';

function TechStack() {
  return (
    <div className={styles.wrapper}>
      {skills.map((skill) => (
        <div key={skill.name} className={styles.techItem}>
          <img src={skill.icon} alt={skill.name} className={styles.icon} />
            </div>
    ))} 
    </div>
  );
}

export default TechStack;