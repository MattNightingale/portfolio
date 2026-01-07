import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

export function SiteNav({ onClick }) {
  const navLinks = [
    { label: "Home", url: "/"},
    { label: "About", url: "/about"},
    { label: "Projects", url: "/projects"},
    { label: "Contact", url: "/contact" }
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.links}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.url}
            to={navLink.url}
            onClick={onClick}
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
