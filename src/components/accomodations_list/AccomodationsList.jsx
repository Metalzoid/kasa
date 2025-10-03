import { Link } from "react-router";
import { useAccomodations } from "../../hooks/useAccomodations";
import AnimatedDots from "../animated_dots/AnimatedDots";
import AccomodationCard from "./accomodation_card/AccomodationCard";
import styles from "./AccomodationsList.module.scss";

export default function AccomodationsList() {
  const { loading, error, accomodations } = useAccomodations();

  if (error) {
    return <div>ERREUR {error}</div>;
  }

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingText}>
          Chargement des hébergements
          <AnimatedDots dotsCount={3} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.accomodationsList}>
      {accomodations.map((accomodation) => (
        <li key={accomodation.id}>
          <Link to={`/${accomodation.id}`}>
            <AccomodationCard accomodation={accomodation} />
          </Link>
        </li>
      ))}
    </div>
  );
}
