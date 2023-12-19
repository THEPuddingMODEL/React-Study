import Modal from "./Modal.jsx";

import { useContext } from "react";
import { currencyformatter } from "../../util/formatting.js";

import CartContext from "../../store/CartContext.jsx";
import UserProgressContext from "../../store/CustProgressContext.jsx";

import Button from "./Button";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgresCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    let itemTotal = item.price * item.quantity;
    return totalPrice + itemTotal;
  }, 0);

  function handleCloseCart(){
    userProgresCtx.hideCart()
  }

  function goToCheckout(){
    userProgresCtx.showCheckout()
  }

  // on close, evemt, when we already changed the progress to checkout, onclose will change the progress to empty string again
  return (
    <Modal className="cart" open={userProgresCtx.progress === 'cart'} onClose={userProgresCtx.progress === 'cart'?handleCloseCart:null}>
      <h2>Your Cart</h2>

      <ul>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          )
        })}
      </ul>

      <p className="cart-total">{currencyformatter.format(cartTotal)}</p>
      <p className="modal-action">
        <Button textOnly onClick={handleCloseCart}>close</Button>

        {cartCtx.items.length > 0 && <Button onClick={goToCheckout}>Go to checkout</Button>}
      </p>
    </Modal>
  );
}
