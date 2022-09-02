import "./App.css";
import Item from "./components/item/Item";
import ItemListContainer from "./components/ItemListContainer/ItemListCointainer";

function App() {
  return (
    <div>
      <div className="App">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div>
        <ItemListContainer greeting={"greeting"} />
      </div>
    </div>
  );
}

export default App;
