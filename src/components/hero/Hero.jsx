import styles from "./Hero.module.scss";

export default function Hero({ title, image, brightness }) {
  return (
    <div className={styles.hero}>
      <div
        className={styles.hero__background}
        style={{
          backgroundImage: `url(${image})`,
          filter: `brightness(${brightness})`,
        }}
      />
      <h2 className={styles.hero__title}>{title}</h2>
    </div>
  );
}
