import TechStack from "../../Components/TechStack/TeckStack";
import styles from "./About.module.css";
import { SlideInFromLeft, SlideInFromRight, SlideInFromTop } from "../Animations/Animations";


function About() {
  return (
    <div className={styles.wrapper}>
      <SlideInFromLeft fullWidth>
      <h2 className={styles.title}>About</h2>
      </SlideInFromLeft>
      <SlideInFromTop >
        <img
          src="/assets/mugshot.jpg"
          alt="Matt Nightingale portrait"
          className={styles.portrait}
        />
      </SlideInFromTop>
      <SlideInFromRight>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I am a front-end developer with a strong engineering background
              and two decades of technical problem-solving experience. After a
              long career in engineering and product development within the
              cycle industry, I’ve recently formalised my software development
              skills through structured training and multiple certificates.
            </p>
            <p>
              I have a naturally analytical mindset, a passion for learning, and
              thrive in roles that involve building, improving, and
              collaborating. I’m particularly motivated by opportunities to grow
              as a developer within a modern, exciting and agile engineering
              team.
            </p>
          </div>
        </div>
      </SlideInFromRight>
      <TechStack />
    </div>
  );
}

export default About;
