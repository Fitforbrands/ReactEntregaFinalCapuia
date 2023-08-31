import React from "react";
import { Carrito } from "../Carrito/Carrito";
import Logo from "./Logo-cafe.png";
import "./navegacion.css";

export const Navegacion = () => {
  return (
    <div>
      <nav className="container--navbar">
        {/* LOGO */}
        <div>
          <img src={Logo} className="navbar--logo" alt="" />
        </div>

        {/* Secciones de la navbar */}
        <ul className="navbar--ul">
          <li className="navbar--ul--li">
            <a className="navbar--ul--li--a" href="#section1">
              Cafe
            </a>
          </li>
          <li className="navbar--ul--li">
            <a className="navbar--ul--li--a" href="#section2">
              Almuerzo
            </a>
          </li>
          <li className="navbar--ul--li">
            <a className="navbar--ul--li--a" href="#section3">
              Bebidas
            </a>
          </li>
        </ul>

        {/* ICON CART + Cantidad */}
        <Carrito />
      </nav>
    </div>
  );
};
