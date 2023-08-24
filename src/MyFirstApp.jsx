import PropTypes from "prop-types";

export const MyFirstApp = ({ nombre, mensaje }) => {
  return (
    <>
      <h1>Hola soy {nombre}</h1>
      <p>{mensaje}</p>
    </>
  );
};

MyFirstApp.propTypes = {
  nombre: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired,
};

MyFirstApp.defaultProps = {
  nombre: "...",
  mensaje: "...",
};
