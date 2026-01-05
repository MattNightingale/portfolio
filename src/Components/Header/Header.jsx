import { SiteNav } from "../SiteNav/SiteNav";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.headerContent}>
      <div className={styles.headerLeft}>
        <img
          className={styles.logo}
          src="/assets/mnlogovector.png"
          alt="Matt Nightingale Logo"
        />
        <h1>Matt Nightingale</h1>
      </div>
      <div className={styles.headerRight}>
        <SiteNav />
      </div>
      </div>
    </header>
  );
}
