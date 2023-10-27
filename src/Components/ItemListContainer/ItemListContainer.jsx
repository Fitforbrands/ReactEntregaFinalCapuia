import "./itemListContainer.css";

import { useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { useState } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // funcion loading...
  const { cid } = useParams();

  // Final desde firebase

  useEffect(() => {
    if (cid) {
      const db = getFirestore();
      const queryCollection = collection(db, "products");
      const queryFilter = query(queryCollection, where("category", "==", cid));
      getDocs(queryFilter)
        .then((resp) =>
          setProducts(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "products");
      getDocs(queryCollection)
        .then((resp) =>
          setProducts(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [cid]);

  return (
    <main>
      <div className="row">
        {loading ? <h2>Loading...</h2> : <ItemList products={products} />}
      </div>
    </main>
  );
};
