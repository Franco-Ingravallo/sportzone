import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className={styles.page}>
      <h1>404</h1>
      <p>¡Esta página no existe en SportZone!</p>
      <Link to="/" className={styles.btn}>Volver al inicio</Link>
    </main>
  );
}

export default NotFound;