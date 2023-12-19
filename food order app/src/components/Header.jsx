import logo from "../assets/logo.jpg";

import Button from "./UI/Button.jsx";

import { useContext } from "react";

import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/CustProgressContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgresContext = useContext(UserProgressContext);

  const totalCartItem = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowModal() {
    userProgresContext.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowModal}>
          Cart ({totalCartItem})
        </Button>
      </nav>
    </header>
  );
}
