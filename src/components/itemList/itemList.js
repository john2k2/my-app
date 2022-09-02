import React, { useState, useEffect } from "react";
import "./itemList.css";
import Item from "./item/Item";

const ItemList = ({data}) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setProductos(json));
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <Item key={producto.id} data={producto} />
      ))}
    </div>
  );
};

export default ItemList;
