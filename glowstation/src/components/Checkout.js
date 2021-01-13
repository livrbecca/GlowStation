import React, { useState } from "react";
import "../css/Checkout.css";

const Checkout = (props) => {
  const [buttonClicked, setButtonClicked] = useState(true);
  const sub = window.localStorage.getItem("subtotal");

  function thankYou() {
    setButtonClicked(false);
  }

  return (
    <div className="checkoutDiv">
      {buttonClicked ? (
        <div className="checkout-container">
          <h3 className="heading-3">Credit card checkout</h3>
          <h4 className="subT">Amount Due: £  { Number(sub ? sub : 0).toFixed(2)}</h4>
          <input
            className="cardInput"
            placeholder="Cardholder's Name"
            type="text"
            name="name"
          />
          <input
            className="cardInput"
            placeholder="Card Number"
            type="number"
            name="card_number"
          />
          <input
            className="cardInput"
            placeholder="Expiration Date"
            type="month"
            name="exp_date"
          />
          Expiration Date
          <input
            className="cardInput"
            placeholder="CVV"
            type="number"
            name="cvv"
          />
          <br />
          <input className="promo" type="text" name="cvv" />
          <i>Got a promo code?</i>
          <button onClick={thankYou} className="placeOrder">
            Place Order
          </button>
        </div>
      ) : (
        <div className="checkout-container">
          <h3 className="heading-3">Purchase Complete</h3>
          <h4 className="subT">Thank you for your order!</h4>
          <h4 className="subT">
            Order Number: <i>QIF74HFO03HD</i>
          </h4>
        </div>
      )}
    </div>
  );
};

export default Checkout;
