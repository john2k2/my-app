import ItemList from "../itemList/itemList";
import "./itemListContainer.css";

const ItemListContainer = ({ data }) => {
  return (
    <div className="itemListContainer">
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <ItemList productos={data} />
          <div className="itemListContainer">
            <h1>Productos</h1>

            <div className="lista_productos">
              <ItemList Productos={data} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
