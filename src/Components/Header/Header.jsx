import { SiteNav } from "../SiteNav/SiteNav";
import styles from "./Header.module.css";
import { slide as Menu } from "react-burger-menu";

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
          <h1 className={styles.title}>Matt Nightingale</h1>
        </div>
        <div className={styles.headerRight}>
          <SiteNav />
        </div>
        <Menu right className={styles.burgerMenu}>
          <SiteNav />
        </Menu>
      </div>
    </header>
  );
}
