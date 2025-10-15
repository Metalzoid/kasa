import styles from "./HostInfos.module.scss";

export default function HostInfos({ host }) {
  // Séparer le prénom et le nom
  const nameParts = host.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" "); // Au cas où il y aurait plusieurs noms de famille

  return (
    <div className={styles.hostInfos}>
      <div className={styles.hostInfos__name}>
        <p className={styles.hostInfos__firstName}>{firstName}</p>
        <p className={styles.hostInfos__lastName}>{lastName}</p>
      </div>
      <img
        src={host.picture}
        alt={host.name}
        className={styles.hostInfos__picture}
      />
    </div>
  );
}
