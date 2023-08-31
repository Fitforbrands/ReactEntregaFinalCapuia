import { Navegacion } from "./Components/Navegacion/Navegacion";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

// css - bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Navegacion />
      <ItemListContainer
        titulo={"Mi nombre es Gabriel"}
        mensaje={"App en React"}
      />
    </div>
  );
};
