import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

export function SiteNav() {
  const navLinks = [
    { label: "Projects", url: "/projects"},
    { label: "About", url: "/about"},
    { label: "Contact", url: "/contact" }
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.links}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.url}
            to={navLink.url}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

