import { useState, useEffect } from "react";
import { slides } from "../data/dummy";
import styles from "./Slider.module.css";

function Slider() {
  const [actual, setActual] = useState(0);

  // Autoplay cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${actual * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.imagen} alt={slide.titulo} />
            <div className={styles.overlay}>
              <h2>{slide.titulo}</h2>
              <p>{slide.subtitulo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots de navegación */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === actual ? styles.dotActivo : ""}`}
            onClick={() => setActual(i)}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;