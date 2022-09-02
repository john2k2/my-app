import React from "react";
import "./itemList.css";
import Item from "../item/Item";

const ItemList = ({ prod }) => {
  return prod.map((productoApi) => (
    <Item key={productoApi.id} data={productoApi} />
  ));
};

export default ItemList;
