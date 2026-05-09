import styles from "./Home.module.css";
import PropuestaValor from "../components/PropuestaValor";

function Home() {
  return (
    <main>
      {/* HERO con animación @keyframes — Criterio 11 */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Tu tienda deportiva en Talca</h1>
          <p>Equipamiento de alto rendimiento para cada aventura.<br/>Visítanos en 1 Norte 801.</p>
          <a href="/productos" className={styles.cta}>Ver Productos</a>
        </div>
      </section>

      {/* Propuesta de Valor — Criterio 8 */}
      <section className={styles.seccion}>
        <PropuestaValor
          titulo="¿Por qué elegir SportZone?"
          descripcion="Somos la tienda deportiva líder de la región del Maule. Contamos con más de 500 productos para todos los deportes: trail, ciclismo, natación, fútbol y más. Asesoría personalizada con expertos certificados en cada área."
          imagen="https://picsum.photos/seed/sportstore/600/400"
        />
      </section>

      {/* 3 beneficios */}
      <section className={styles.beneficios}>
        <div className={styles.beneficioItem}>
          <span>🚚</span>
          <h3>Despacho a todo el Maule</h3>
          <p>Enviamos a Curicó, Linares, Constitución y toda la región.</p>
        </div>
        <div className={styles.beneficioItem}>
          <span>🏅</span>
          <h3>Marcas Premium</h3>
          <p>Solo trabajamos con proveedores certificados de calidad.</p>
        </div>
        <div className={styles.beneficioItem}>
          <span>🔄</span>
          <h3>30 días para cambios</h3>
          <p>Garantía de satisfacción en todos nuestros productos.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;