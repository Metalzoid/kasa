import styles from "./DropdownText.module.scss";

export default function DropdownText({ content, isOpen }) {
  return (
    <div
      className={`${styles.dropdownText} ${
        isOpen ? styles.dropdownText__open : styles.dropdownText__closed
      }`}
    >
      <p className={styles.dropdownText__content}>{content}</p>
    </div>
  );
}
