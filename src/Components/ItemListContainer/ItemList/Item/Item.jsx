import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card w-25">
      <div className="card-body">
        <img className="w-100" src={product.imgUrl} alt="imagen prducto" />
        <p>${product.price}</p>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <Link
          to={`/detalle/${product.id}`}
          className="btn btn-outline-dark w-100"
        >
          DETALLE
        </Link>
      </div>
    </div>
  );
};

export default Item;
