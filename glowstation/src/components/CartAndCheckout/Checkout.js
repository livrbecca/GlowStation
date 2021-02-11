import React, { createRef, useEffect, useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const paypal = createRef();
  console.log(paypal);

  const [clicked, setClicked] = useState(false);

  let [sub, setSub] = useState(window.sessionStorage.getItem("subtotal"));

  const [input, setInput] = useState("");

  function applyCode(e) {
    if (input === "GLOW") {
      setSub(Number(sub - sub * (15 / 100)));
    }
    setInput("");
    setClicked(true);
  }

  useEffect(() => {
    if (window.myButton) window.myButton.close();
    window.myButton = window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Facial products",
              amount: {
                currency_code: "GBP",
                value: sub ? sub : 0,
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: (err) => {
        console.log(err);
      },
    });

    window.myButton.render(paypal.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sub]);

  return (
    <div className="checkoutDiv">
      <form>
        <input
          className="checkoutText promo"
          type="text"
          defaultValue="Reset"
          name="promo"
          placeholder="Enter Promo Code"
          value={input}
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <button
        onClick={(e) => applyCode(e)}
        disabled={clicked ? true : false}
        className="checkoutText"
      >
        Apply Code
      </button>
      <h4 className="checkoutText">
        Amount: £{Number(sub ? sub : 0).toFixed(2)}
      </h4>
      <h3 className="checkoutText">Checkout with:</h3>
      <div ref={paypal}></div>
    </div>
  );
};

export default Checkout;
