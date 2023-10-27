import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProduct = (newProduct) => {
    const idx = cartList.findIndex((product) => product.id === newProduct.id);

    if (idx != -1) {
      cartList[idx].quantity = cartList[idx].quantity + newProduct.quantity;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };

  // Eliminar por item

  const eliminarItem = (id) =>
    setCartList(cartList.filter((product) => product.id != id));

  const cantidadTotal = () =>
    cartList.reduce((count, objProducto) => (count += objProducto.quantity), 0);

  const precioTotal = () =>
    cartList.reduce(
      (count, objProducto) =>
        (count += objProducto.price * objProducto.quantity),
      0
    );

  const deleteCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        deleteCart,
        cantidadTotal,
        precioTotal,
        eliminarItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
