import "./itemListContainer.css";
import ItemCount from "../itemCount/itemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (count) => {
    alert(`Agregaste ${count} productos al carrito`);
  };

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemCount stock = {10} initial = {1} onAdd = {onAdd} />
    </div>
  );
};

export default ItemListContainer;
