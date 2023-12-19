import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import Checkout from "./components/Checkout.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/CustProgressContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header></Header>
        <Meals></Meals>
        <Cart></Cart>
        <Checkout></Checkout>
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
