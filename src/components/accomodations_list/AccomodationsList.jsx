import { Link } from "react-router";
import { useAccomodations } from "../../hooks/useAccomodations";
import AccomodationCard from "./accomodation_card/AccomodationCard";
import styles from "./AccomodationsList.module.scss";

export default function AccomodationsList() {
  const { loading, accomodations } = useAccomodations();

  const accomodationsList = !loading
    ? accomodations.map((accomodation) => (
        <li key={accomodation.id}>
          <Link to={`/${accomodation.id}`}>
            <AccomodationCard accomodation={accomodation} />
          </Link>
        </li>
      ))
    : null;
  return <div className={styles.accomodationsList}>{accomodationsList}</div>;
}
