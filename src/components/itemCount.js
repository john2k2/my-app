import React, { useState } from "react";
import "./itemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const [stock, setCount2] = useState(10);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("You can't have more than 10 items");
    }
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="Count">
      <h1>Componentes Funcionales</h1>
      <h2>Stock {stock} </h2>
      <p>{count}</p>
      <div className="Count-btn">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
