import styles from "./ProjectCard.module.css";
import { useEffect, useState } from "react";

export function ProjectCard({ title, description, link, image, tech, github }) {
  const [isWideScreen, setIsWideScreen] = useState(
    () => window.innerWidth >= 1024
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaChange = (e) => setIsWideScreen(e.matches);
    setIsWideScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const imageSrc = isWideScreen
    ? `/assets/${title.toLowerCase().replace(/[\s']/g, "")}wide.png`
    : `/assets/${title.toLowerCase().replace(/[\s']/g, "")}mob.png`;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tech}>
          {tech &&
            tech.map((techIcon, index) => (
              <img
                key={index}
                src={techIcon}
                alt="Technology icon"
                className={styles.techIcon}
              />
            ))}
        </div>
        <div className={styles.links}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Visit site
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub repo
          </a>
        </div>
      </div>
    </div>
  );
}
