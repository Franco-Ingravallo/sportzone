import styles from "./Productos.module.css";
import Card from "../components/Card";
import { productos } from "../data/dummy";

function Productos() {
  return (
    <main className={styles.page}>
      <h1 className={styles.titulo}>Nuestros Productos</h1>
      <p className={styles.subtitulo}>Más de 500 artículos para tu deporte favorito</p>

      <div className={styles.grid}>
        {productos.map((producto) => (
          <Card key={producto.id} {...producto} />
        ))}
      </div>
    </main>
  );
}

export default Productos;