import styles from './ProjectCard.module.css';

export function ProjectCard({ title, description, link }) {
    return (
        <div className={styles.wrapper}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
    );
}