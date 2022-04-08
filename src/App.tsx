// styles
import "./App.css";

// components
import Cart from "./components/Cart";

// context
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Cart />
      </CartContextProvider>
    </div>
  );
}

export default App;
