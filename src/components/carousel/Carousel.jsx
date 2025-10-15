import { useCallback, useEffect, useState } from "react";
import styles from "./Carousel.module.scss";

export default function Carousel({ pictures, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  }, [pictures.length]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  const handleManualNext = () => {
    handleNext();
    setResetTimer((prev) => prev + 1);
  };

  const handleManualPrevious = () => {
    handlePrevious();
    setResetTimer((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [handleNext, resetTimer]);

  const showControls = pictures.length > 1;

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__track}>
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`${styles.carousel__slide} ${
              index === currentIndex ? styles.carousel__slide__active : ""
            }`}
          >
            <img src={picture} alt={`${description} - ${index + 1}`} />
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            onClick={handleManualPrevious}
            className={styles.carousel__button__previous}
            aria-label="Image précédente"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M31 12L17 26L31 40" stroke="white" strokeWidth="4" />
            </svg>
          </button>

          <button
            onClick={handleManualNext}
            className={styles.carousel__button__next}
            aria-label="Image suivante"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 12L31 26L17 40" stroke="white" strokeWidth="4" />
            </svg>
          </button>

          <div className={styles.carousel__counter}>
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}
