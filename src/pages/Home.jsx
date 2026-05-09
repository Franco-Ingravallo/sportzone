import styles from "./Home.module.css";
import PropuestaValor from "../components/PropuestaValor";
import Slider from "../components/Slider";

function Home() {
  return (
    <main>
      {/* SLIDER — reemplaza el hero */}
      <Slider />

      {/* Propuesta de Valor — Criterio 8 */}
      <section className={styles.seccion}>
        <PropuestaValor
          titulo="¿Por qué elegir SportZone?"
          descripcion="Somos la tienda deportiva líder de la región del Maule. Contamos con más de 500 productos para todos los deportes: trail, ciclismo, natación, fútbol y más. Asesoría personalizada con expertos certificados en cada área."
          imagen="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop"
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