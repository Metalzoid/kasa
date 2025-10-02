import styles from "./AccomodationCard.module.scss";

export default function AccomodationCard({ accomodation }) {
  return (
    <div className={styles.accomodationCard}>
      <img src={accomodation.cover} alt={accomodation.title} />
      <div className={styles.titleOverlay}>
        <h3>{accomodation.title}</h3>
      </div>
    </div>
  );
}
