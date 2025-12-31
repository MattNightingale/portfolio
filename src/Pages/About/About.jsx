import TechStack from "../../Components/TechStack/TeckStack";
import styles from "./About.module.css";


function About() {
  return (
   <div className={styles.wrapper}>
    <img
          src="/assets/mugshot.jpg"
          alt="Matt Nightingale portrait"
          className={styles.portrait}
        />
    <div className={styles.content}>      
      <h2 className={styles.title}>About</h2>
      <div className={styles.text}>
        <p>
          I am a front-end developer with a strong engineering background and
          two decades of technical problem-solving experience. After a long
          career in engineering and product development within the cycle
          industry, I’ve recently formalised my software development skills
          through structured training and multiple certificates.
        </p>
        <p>
          I have a naturally analytical mindset, a passion for learning, and
          thrive in roles that involve building, improving, and collaborating.
          I’m particularly motivated by opportunities to grow as a developer
          within a modern, supportive engineering team.
        </p>
      </div>
    </div>
    <TechStack />
    </div>
  );
}

export default About;
