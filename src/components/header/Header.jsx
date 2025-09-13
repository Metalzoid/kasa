import logoRed from "@/assets/images/logo_red.png";
import styles from "./Header.module.scss";
import Navigation from "./navbar/Navigation";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logoRed} alt="Kasa" />
      </div>
      <Navigation links={props.links} />
    </header>
  );
}
