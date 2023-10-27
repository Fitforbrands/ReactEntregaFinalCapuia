import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navegacion } from "./Components/Navegacion/Navegacion";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./Components/CartContainer/CartContainer";
import { CartContextProvider } from "./Components/context/CartContext";
// css - bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navegacion />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:cid" element={<ItemListContainer />} />
          <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};
