import styles from "./Projects.module.css";
import { ProjectCard } from "../../Components/ProjectCard/ProjectCard.jsx";
import projects from "../../data/projects.json";
import { SlideInFromLeft, SlideInFromRight } from "../Animations/Animations";
import { useEffect, useState } from "react";

function Projects() {
  const [isLargeScreen, setIsLargeScreen] = useState(
    () => window.innerWidth >= 1024
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaChange = (e) => {
      setIsLargeScreen(e.matches);
    };

    setIsLargeScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className={styles.wrapper}>
      <SlideInFromLeft fullWidth={true} offset={200} duration={1}>
        <h2 className={styles.title}>Projects</h2>
      </SlideInFromLeft>
      {isLargeScreen ? (
        <div className={styles.carousel}>
          {projects.map((p, index) => {
            const card = (
              <ProjectCard
                key={p.name}
                title={p.name}
                description={p.description}
                link={p.link}
                github={p.github}
                image={p.image}
                tech={p.tech}
                reversed={index % 2 === 1}
              />
            );

            const AnimationComponent =
              index % 2 === 0 ? SlideInFromRight : SlideInFromLeft;
            const marginStyle =
              index % 2 === 0
                ? { marginRight: "50px" }
                : { marginLeft: "50px" };

            return (
              <div
                key={p.name}
                className={styles.cardWrapper}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  ...marginStyle,
                }}
              >
                <AnimationComponent delay={0.2}>{card}</AnimationComponent>
              </div>
            );
          })}
        </div>
      ) : (
        <SlideInFromRight fullWidth={true} offset={200} duration={1}>
          <div className={styles.carousel}>
            {projects.map((p, index) => (
              <ProjectCard
                key={p.name}
                title={p.name}
                description={p.description}
                link={p.link}
                github={p.github}
                image={p.image}
                tech={p.tech}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </SlideInFromRight>
      )}
    </div>
  );
}

export default Projects;
