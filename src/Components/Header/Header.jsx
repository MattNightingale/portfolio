import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrapper}>
        <div className={styles.headerLeft}>
      <img
        className={styles.logo}
        src="/assets/mnlogovector.png"
        alt="Matt Nightingale Logo"
      />
      <h1>Matt Nightingale</h1>
      </div>
      <div className={styles.headerRight}>
      <nav className={styles.navLinks}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      </div>
    </header>
  );
}
