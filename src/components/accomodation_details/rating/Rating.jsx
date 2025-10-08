import styles from "./Rating.module.scss";

export default function Rating({ rating = 0 }) {
  // Convertir le rating en nombre si c'est une chaîne
  const numericRating = parseFloat(rating);

  // Créer un tableau de 5 étoiles
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= numericRating) {
      // Étoile pleine
      stars.push(
        <span
          key={i}
          className={`${styles.rating__star} ${styles.rating__star_full}`}
        >
          ★
        </span>
      );
    } else if (i - 1 < numericRating) {
      // Étoile partiellement remplie (pour les incréments de 0.1)
      const fillPercentage = ((numericRating - (i - 1)) * 100).toFixed(0);
      stars.push(
        <span
          key={i}
          className={`${styles.rating__star} ${styles.rating__star_partial}`}
          style={{ "--fill-percentage": `${fillPercentage}%` }}
        >
          ★
        </span>
      );
    } else {
      // Étoile vide
      stars.push(
        <span
          key={i}
          className={`${styles.rating__star} ${styles.rating__star_empty}`}
        >
          ☆
        </span>
      );
    }
  }

  return <div className={styles.rating}>{stars}</div>;
}
