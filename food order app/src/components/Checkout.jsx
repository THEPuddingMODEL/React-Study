import Modal from "./UI/Modal.jsx";

import { useContext } from "react";
import { currencyformatter } from "../util/formatting.js";

import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/CustProgressContext.jsx";

import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgresCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    let itemTotal = item.price * item.quantity;
    return totalPrice + itemTotal;
  }, 0);

  function handleCloseCheckout() {
    userProgresCtx.hideCheckout();
  }

  // if do not prevent defaut behaibour, browser will send a  defaut request to the
  // develooment seerver
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);

    const customerData = Object.fromEntries(fd.entries()); // {email:ljacky2001527@gmail.com produce ojey,val pair}

    fetech("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        orders: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal
      open={userProgresCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form action="">
        <h2>Checkout</h2>
        <p>Total: {currencyformatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name"></Input>
        <Input label="Email Address" type="email" id="email"></Input>
        <Input label="Street" type="text" id="street"></Input>

        <div className="control-row">
          <Input label="Post Code" type="text" id="postal-code"></Input>
          <Input label="City" type="text" id="city"></Input>
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </p>
      </form>
    </Modal>
  );
}
