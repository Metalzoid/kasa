import Dropdown from "../dropdown/Dropdown";
import styles from "./AccomodationDetails.module.scss";
import HostInfos from "./hostInfos/HostInfos";
import Rating from "./rating/Rating";
import Tags from "./tags/Tags";

export default function AccomodationDetails({ accomodation }) {
  return (
    <div className={styles.accomodationDetails}>
      <div className={styles.accomodationDetails__header}>
        <div className={styles.accomodationDetails__info}>
          <h1 className={styles.accomodationDetails__title}>
            {accomodation.title}
          </h1>
          <p className={styles.accomodationDetails__location}>
            {accomodation.location}
          </p>
          <div className={styles.accomodationDetails__tags}>
            <Tags tags={accomodation.tags} />
          </div>
        </div>

        <div className={styles.accomodationDetails__host}>
          <Rating rating={accomodation.rating} />
          <HostInfos host={accomodation.host} />
        </div>
      </div>

      <div className={styles.accomodationDetails__dropdowns}>
        <Dropdown title="Description" content={accomodation.description} />
        <Dropdown title="Équipements" content={accomodation.equipments} />
      </div>
    </div>
  );
}
