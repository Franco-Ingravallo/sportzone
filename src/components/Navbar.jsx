import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="SportZone logo" width="32" height="32" />
          SportZone<span>Talca</span>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/equipo"
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Equipo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/developer"
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Developer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;