import Button from "react-bootstrap/Button";

import "../ItemCount/ItemCount.css";
import { useCounter } from "../hooks/useCounter";

export const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, addCount, subtCount } = useCounter(initial, stock);
  return (
    <div className="contador">
      <Button onClick={subtCount} variant="dark">
        -
      </Button>

      <label>
        <strong>{count}</strong>
      </label>

      <Button onClick={addCount} variant="dark">
        +
      </Button>

      <Button onClick={() => onAdd(count)} variant="dark">
        AGREGAR AL CARRITO
      </Button>
    </div>
  );
};
