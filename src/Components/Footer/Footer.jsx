import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.text}>&copy; 2025 Matt Nightingale</p>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/matt-nightingale-925639129/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/linkedin.png" className={styles.liIcon} />
        </a>
        <a
          href="https://github.com/MattNightingale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/github.png" className={styles.ghIcon} />
        </a>
      </div>
    </footer>
  );
}
