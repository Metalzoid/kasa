import { NavLink } from "react-router";
import { useState } from "react";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [links, _setLinks] = useState([
    { to: "/", label: "Accueil" },
    { to: "/about", label: "A propos" },
  ]);
  return (
    <nav className={styles.navigation}>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
