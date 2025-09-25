import { useState } from "react";
import styles from "./Dropdown.module.scss";
import DropdownList from "./DropdownList/DropdownList";
import DropdownText from "./DropdownText/DropdownText";

export default function Dropdown({ title, content }) {
  const typeOfContent = typeof content;
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <div className={styles.dropdown__header}>
        <h3 className={styles.dropdown__header__title}>{title}</h3>
        <span className={styles.dropdown__header__arrow}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <polyline
              points="6,9 12,15 18,9"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {typeOfContent === "string" ? (
        <DropdownText content={content} isOpen={isOpen} />
      ) : (
        <DropdownList content={content} isOpen={isOpen} />
      )}
    </div>
  );
}
