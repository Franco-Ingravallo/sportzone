import styles from "./Equipo.module.css";
import { equipo } from "../data/dummy";

function Equipo() {
  return (
    <main className={styles.page}>
      <h1 className={styles.titulo}>Nuestro Equipo</h1>
      <p className={styles.subtitulo}>Personas apasionadas por el deporte, listas para asesorarte</p>

      <div className={styles.grid}>
        {equipo.map((persona) => (
          <div key={persona.id} className={styles.tarjeta}>
            <img src={persona.imagen} alt={persona.nombre} className={styles.foto} />
            <h3>{persona.nombre}</h3>
            <span className={styles.rol}>{persona.rol}</span>
            <p>{persona.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Equipo;