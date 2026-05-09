import styles from "./Developer.module.css";
import nethvarion from "../assets/Nethvarion.jpeg";

function Developer({ nombre, carrera, ciudad, github }) {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img
          src={nethvarion}
          alt={nombre}
          className={styles.avatar}
        />
        <h1>{nombre}</h1>
        <p className={styles.carrera}>{carrera}</p>
        <p className={styles.ciudad}>📍 {ciudad}</p>
        <p className={styles.desc}>
          Estudiante de {carrera} en la Universidad Católica del Maule.
          Desarrollador de esta aplicación web como parte del curso Electivo III.
        </p>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubBtn}
        >
          Ver GitHub
        </a>
      </div>
    </main>
  );
}

export default Developer;