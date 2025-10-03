import styles from "./AnimatedDots.module.scss";

export default function AnimatedDots({ dotsCount = 3 }) {
  const dots = Array.from({ length: dotsCount }, (_, index) => (
    <span
      key={index}
      className={styles.dot}
      style={{ animationDelay: `${index * 0.2}s` }}
    ></span>
  ));

  return <div className={styles.animatedDots}>{dots}</div>;
}
