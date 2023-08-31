import "./itemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div className="container--ItemListContainer">
      <h1>{props.titulo}</h1>
      <p>{props.mensaje}</p>
    </div>
  );
};
