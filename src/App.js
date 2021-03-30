import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductContainer from "./components/ProductContainer/ProductContainer";

function App() {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      <ProductContainer data={data} />
    </div>
  );
}

export default App;
