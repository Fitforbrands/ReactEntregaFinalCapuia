import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { mFetch } from "../../utils/mockFetch";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();
  console.log(pid);

  // useEffect(() => {
  //   mFetch(Number(pid))
  //     .then((resp) => setProduct(resp))
  //     .catch((err) => console.log(err));
  //   //   .finally (set loading)
  // }, []);

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", pid);
    getDoc(queryDoc)
      .then((resp) => ({ id: resp.id, ...resp.data() }))
      .then((resp) => setProduct(resp));
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
