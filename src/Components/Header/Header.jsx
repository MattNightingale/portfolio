import { SiteNav } from "../SiteNav/SiteNav";
import styles from "./Header.module.css";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <img
            className={styles.logo}
            src="/assets/mnlogovector.webp"
            alt="Matt Nightingale Logo"
          />
          <h1 className={styles.title}>Matt Nightingale</h1>
        </div>
        <div className={styles.headerRight}>
          <SiteNav />
        </div>
        <Menu
          right
          className={styles.burgerMenu}
          isOpen={menuOpen}
          onStateChange={handleStateChange}
        >
          <SiteNav onClick={closeMenu} />
        </Menu>
      </div>
    </header>
  );
}
