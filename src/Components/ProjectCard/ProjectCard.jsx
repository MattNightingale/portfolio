import styles from "./ProjectCard.module.css";
import { useState } from "react";

export function ProjectCard({ title, description, link, image }) {
  const [isActive, setIsActive] = useState(false);

  const handleTap = () => {
    setIsActive(!isActive);
  };

  const backDrop = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className={`${styles.wrapper} ${isActive ? styles.active : ""}`}
      style={backDrop}
      onClick={handleTap}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {isActive && <h3 className={styles.title}>{title}</h3>}
      {isActive && <p className={styles.description}>{description}</p>}
      {isActive && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Visit
        </a>
      )}
    </div>
  );
}
