import styles from "./DropdownList.module.scss";

export default function DropdownList({ content, isOpen }) {
  return (
    <div
      className={`${styles.dropdownList} ${
        isOpen ? styles.dropdownList__open : styles.dropdownList__closed
      }`}
    >
      <ul className={styles.dropdownList__list}>
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
