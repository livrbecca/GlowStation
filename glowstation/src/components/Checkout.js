import React, { useEffect, useRef } from "react";
import "../css/Checkout.css";

const Checkout = () => {
  const sub = window.localStorage.getItem("subtotal");
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
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
      })
      .render(paypal.current);
  }, [sub]);

  return (
    <div className="checkoutDiv">
      <h4 className="checkoutText">
        Amount: £{ Number(sub ? sub : 0).toFixed(2)}
      </h4>
      <h3 className="checkoutText">Checkout With:</h3>
      <div ref={paypal}></div>
    </div>
  );
};

export default Checkout;
