import "./itemListContainer.css";
import { mFetch } from "../../utils/mockFetch";
import { useEffect } from "react";
import {
  doc,
  getFirestore,
  getDoc,
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
  console.log(cid);

  // original del mock

  // useEffect(() => {
  //   if (cid) {
  //     mFetch()
  //       .then((respuesta) =>
  //         setProducts(respuesta.filter((product) => cid === product.category))
  //       )
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   } else {
  //     mFetch()
  //       .then((respuesta) => setProducts(respuesta))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   }
  // }, [cid]);

  // funcion que nos da firebase para traer un doc de firestore
  // usar en item detail container
  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryDoc = doc(db, "products", "0xzyekvnqxgv7Vfy9usf");
  //   getDoc(queryDoc)
  //     .then((resp) => ({ id: resp.id, ...resp.data() }))
  //     .then((resp) => setProducts(resp));
  // }, []);

  // trae todos los productos de firebase
  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryCollection = collection(db, "products");
  //   getDocs(queryCollection)
  //     .then((resp) =>
  //       setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
  //     )
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  // Trae productos filtrados de Firebase

  // useEffect(() => {
  //   const db = getFirestore();
  //   // const queryCollection = collection(db, "products");
  //   const queryFilter = query(queryCollection, where("category", "==", cid));
  //   getDocs(queryFilter)
  //     .then((resp) =>
  //       setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
  //     )
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

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
