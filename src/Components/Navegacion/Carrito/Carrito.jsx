import React from "react";
import "./carrito.css";
import { useCartContext } from "../../context/CartContext";

export const Carrito = () => {
  const { cantidadTotal } = useCartContext();
  return (
    <div>
      <div className="container--cartWidget">
        <div className="cart--icon">🛒</div>
        <div className="cart--quantity">{cantidadTotal()}</div>
      </div>
    </div>
  );
};
