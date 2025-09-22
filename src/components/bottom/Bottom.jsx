import logoWhite from "../../assets/images/logo_white.png";
import styles from "./Bottom.module.scss";

export default function Bottom() {
  return (
    <footer className={styles.bottom}>
      <div className={styles.content}>
        <img src={logoWhite} alt="Kasa" className={styles.logo} />
        <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
