import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [contador, setContador] = useState(value);

  const sumarUno = () => {
    console.log("+1");
    setContador(contador + 1);
  };

  const restarUno = () => {
    console.log("-1");
    setContador(contador - 1);
  };

  const resetValue = () => {
    console.log("-1");
    setContador(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>{contador}</p>
      <button onClick={sumarUno}>+1</button>
      <button onClick={restarUno}>-1</button>
      <button onClick={resetValue}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: "...",
};
