import styles from "./PropuestaValor.module.css";

function PropuestaValor({ titulo, descripcion, imagen }) {
  return (
    <section className={styles.propuesta}>
      <img src={imagen} alt={titulo} className={styles.img} />
      <div className={styles.texto}>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    </section>
  );
}

export default PropuestaValor;