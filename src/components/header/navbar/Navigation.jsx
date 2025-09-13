import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

export default function Navigation(props) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {props.links.map((link) => (
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
