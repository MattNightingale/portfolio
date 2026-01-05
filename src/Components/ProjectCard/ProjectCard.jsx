import styles from "./ProjectCard.module.css";


export function ProjectCard({ title, description, link, image }) {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={title} className={styles.image}/>
      <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Visit
      </a>
      </div>
    </div>
  );
}
