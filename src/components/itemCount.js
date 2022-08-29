import React, { useState } from "react";
import "./itemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
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
      <p>{count}</p>
      <div className="Count-btn">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
