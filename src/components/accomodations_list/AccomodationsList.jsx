import { Link } from "react-router";
import { useAccomodations } from "../../hooks/useAccomodations";
import AnimatedDots from "../animated_dots/AnimatedDots";
import AccomodationCard from "./accomodation_card/AccomodationCard";
import styles from "./AccomodationsList.module.scss";

export default function AccomodationsList() {
  const { loading, accomodations } = useAccomodations();

  const accomodationsList = !loading ? (
    accomodations.map((accomodation) => (
      <li key={accomodation.id}>
        <Link to={`/${accomodation.id}`}>
          <AccomodationCard accomodation={accomodation} />
        </Link>
      </li>
    ))
  ) : (
    <div className={styles.loadingContainer}>
      <p className={styles.loadingText}>
        Chargement des hébergements
        <AnimatedDots dotsCount={3} />
      </p>
    </div>
  );
  return <div className={styles.accomodationsList}>{accomodationsList}</div>;
}
