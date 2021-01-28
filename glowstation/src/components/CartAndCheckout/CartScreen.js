import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartScreen.css";
import CartProduct from "./CartProduct";
//import CartProduct from "./CartProduct";
import Checkout from "./Checkout";

const CartScreen = ({ cart, removeFromCart }) => {
  const [checkout, setCheckout] = useState(false);

  const cartItems = JSON.parse(window.sessionStorage.getItem("cartItems"));
  const [subtotal, setSubtotal] = useState(0);

  const [price, setPrice] = useState(0);
  const [values, setValues] = useState(cartItems ? cartItems : cart);

  function idExists(id) {
    return values.some((e) => e.id === id);
  }
  console.log(cart);
  function updateValues(item, count, price) {
    if (!idExists(item.id)) {
      setValues([...values, { id: item.id, qty: count, price: price }]);
    } else {
      const itemIndex = values.findIndex((e) => e.id === item.id);
      let tempValues = [...values];
      tempValues[itemIndex] = {
        ...tempValues[itemIndex],
        qty: count,
        price: price,
      };
      setValues(tempValues);
      
      window.sessionStorage.setItem("cartItems", JSON.stringify(tempValues));
    }
  }
  function calculateValues() {
    let total = 0;
    let amount = 0;
    // eslint-disable-next-line array-callback-return
    cart.map((item) => {
      
      total += item.qty;

      amount += item.price;
    });
    setSubtotal(total);
    setPrice(amount);
    window.sessionStorage.setItem("subtotal", amount);
    //subtotal = total;
    //price = amount;
  }

  useEffect(() => {
    calculateValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, cart]);

  return (
    <div>
      <>
        {checkout ? (
          <>
            <button
              onClick={() => {
                setCheckout(false);
              }}
              className="miniButton"
            >
              Back
            </button>
            <Checkout />
          </>
        ) : (
          <>
            <h2>Cart Screen</h2>
            {cart.length === 0 ? (
              <h2 className="listEmpty">
                Oops. Cart is empty.{" "}
                <Link to="/shop">
                  <b>
                    <i>Go Shopping!</i>
                  </b>
                </Link>
              </h2>
            ) : (
              <div className="container2">
                <h3>
                  <i>
                    <Link to="/shop">
                      <button className="miniButton">continue shopping</button>
                    </Link>
                  </i>
                </h3>
                <div className="row1">
                  <h2>
                    Subtotal ({subtotal} items): £ {price.toFixed(2)}
                  </h2>

                  {cart.map((item) => (
                    <CartProduct
                      key={item.id}
                      item={item}
                      updateValues={updateValues}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                </div>
                <button
                  onClick={() => {
                    setCheckout(true);
                  }}
                  className="checkout"
                >
                  Checkout
                </button>
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default CartScreen;
