// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { ItemCount } from "../../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [isCounter, setIsCounter] = useState(true);
  const { addProduct, cartList } = useCartContext();
  // console.log(product);
  const onAdd = (quantity) => {
    // console.log(count);
    addProduct({ ...product, quantity });
    setIsCounter(false);
  };
  console.log(cartList);

  return (
    <div className="row">
      <h2>Vista de detalle de {product.name}</h2>

      <div className="col">
        <img className="w-25" src={product.imgUrl} alt="imagen" />
      </div>
      <div className="col">
        <p>Producto: {product.name}</p>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>stock: {product.stock}</p>
      </div>
      <div className="col">
        {isCounter ? (
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        ) : (
          <>
            <Link to={"/cart"}>
              <button className="btn btn-outline-dark"> Ir al carrito</button>
            </Link>
            <Link to={"/"}>
              <button className="btn btn-outline-dark">
                {" "}
                Seguir comprando
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
