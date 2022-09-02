import "./itemListContainer.css";
import ItemList from "../itemList/itemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setProductos(json));
  }, []);

  return (
    <div>

      <ItemList prod = {productos} />
    </div>
  );
};

export default ItemListContainer;
