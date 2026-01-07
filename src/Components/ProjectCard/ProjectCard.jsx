import styles from "./ProjectCard.module.css";

export function ProjectCard({ title, description, link, image, tech, github }) {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tech}>
          {tech && tech.map((techIcon, index) => (
            <img key={index} src={techIcon} alt="Technology icon" className={styles.techIcon} />
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
