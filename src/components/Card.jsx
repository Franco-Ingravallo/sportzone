import styles from "./Card.module.css";

function Card({ nombre, descripcion, precio, imagen, categoria }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={imagen} alt={nombre} />
        <span className={styles.badge}>{categoria}</span>
      </div>
      <div className={styles.body}>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <div className={styles.footer}>
          <span className={styles.precio}>
            ${precio.toLocaleString("es-CL")}
          </span>
          <button className={styles.btn}>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Card;