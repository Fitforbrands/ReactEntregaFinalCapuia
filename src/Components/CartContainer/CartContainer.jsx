import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const [dataForm, setdataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [id, setId] = useState("");
  const { cartList, deleteCart, precioTotal, eliminarItem } = useCartContext();
  console.log(cartList);

  const handleAddOrder = async (evt) => {
    evt.preventDefault();
    const order = {};
    order.buyer = {
      name: dataForm.name,
      phone: dataForm.phone,
      email: dataForm.email,
    };
    order.items = cartList.map((prod) => {
      return {
        id: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: prod.quantity,
      };
    });
    order.total = precioTotal();

    // insertar orden u otro doc en una coleccion
    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err))
      .finally(() => {
        setdataForm({
          name: "",
          phone: "",
          email: "",
        });
        deleteCart();
      });

    //update doc
    // const queryDB = getFirestore();
    // const queryUpdateProduct = doc(queryDB, "products", "0xzyekvnqxgv7Vfy9usf");
    // updateDoc(queryUpdateProduct, {
    //   stock: 499,
    // }).then(() => console.log("se actualizo"));
  };

  const handleOnChange = (evt) => {
    setdataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };
  console.log(dataForm);
  return (
    <>
      {id != "" && <h3>Se ha realizado con exito el pedido: {id}</h3>}
      {cartList.length > 0 ? (
        <div>
          {cartList.map((prod) => (
            <div key={prod.id}>
              {prod.quantity} - {prod.name} - {prod.price} - Total:${" "}
              {prod.price * prod.quantity}
              <button onClick={() => eliminarItem(prod.id)}> X </button>
            </div>
          ))}
          {precioTotal() != 0 && <h2>Precio total: {precioTotal()} </h2>}
          <button onClick={deleteCart}>Vaciar Carrito</button>
          <form onSubmit={handleAddOrder}>
            <input
              type="text"
              name="name"
              placeholder="Ingresar el Nombre"
              value={dataForm.name}
              onChange={handleOnChange}
            />
            <input
              type="phone"
              name="phone"
              placeholder="telefono"
              value={dataForm.phone}
              onChange={handleOnChange}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={dataForm.email}
              onChange={handleOnChange}
            />
            <button className="btn btn-success">Terminar Compra</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>No hay productos</h2>
          <Link to="/">Ir a comprar</Link>
        </div>
      )}
    </>
  );
};

export default CartContainer;
