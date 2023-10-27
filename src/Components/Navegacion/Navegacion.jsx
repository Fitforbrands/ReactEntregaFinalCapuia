import { Link, NavLink } from "react-router-dom";
import { Carrito } from "./Carrito/Carrito";
import "./navegacion.css";

export const Navegacion = () => {
  return (
    <div>
      <nav className="container--navbar">
        {/* LOGO */}
        <div>
          <Link to="/">
            <img
              src="https://i.ibb.co/PCNRyKJ/logo-cafeteria.png"
              className="navbar--logo"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Secciones de la navbar */}
        <ul className="navbar--ul">
          <li className="navbar--ul--li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-dark" : "navbar--ul--li--a"
              }
              to="/category/cafe"
            >
              Cafe
            </NavLink>
          </li>
          <li className="navbar--ul--li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-dark" : "navbar--ul--li--a"
              }
              to="/category/almuerzo"
            >
              Almuerzo
            </NavLink>
          </li>
          <li className="navbar--ul--li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-dark" : "navbar--ul--li--a"
              }
              to="/category/bebidas"
            >
              Bebidas
            </NavLink>
          </li>
        </ul>

        {/* ICON CART + Cantidad */}
        <Link to="/cart">
          <Carrito />
        </Link>
      </nav>
    </div>
  );
};
