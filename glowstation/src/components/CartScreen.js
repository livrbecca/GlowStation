import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/CartScreen.css";
import CartProduct from "./CartProduct";

// <Product wishlist={[]} product={item} />

const CartScreen = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [values, setValues] = useState([]);

  function idExists(id) {
    return values.some((e) => e.id === id);
  }

  function updateValues(item, count, price) {
    if (!idExists(item.id)) {
      setValues([...values, { id: item.id, count: count, price: price }]);
    } else {
      const itemIndex = values.findIndex((e) => e.id === item.id);
      let tempValues = [...values];
      tempValues[itemIndex] = {
        ...tempValues[itemIndex],
        count: count,
        price: price,
      };
      setValues(tempValues);
    }
  }
  function calculateValues() {
    let total = 0;
    let amount = 0;
    // eslint-disable-next-line array-callback-return
    values.map((item) => {
      total += item.count;
      amount += item.price;
    });
    setSubtotal(total);
    setPrice(amount);
  }

  useEffect(() => {
    console.log(values);
    calculateValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <div>
      <>
        <h2>Cart Screen</h2>
        {props.cart.length === 0 ? (
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
                <Link to="/shop">continue shopping</Link>
              </i>
            </h3>
            <div className="row1">
              <h2>
                Subtotal ({subtotal} items): £ {price.toFixed(2)}
              </h2>

              {props.cart.map((item) => (
                <CartProduct
                  key={item.id}
                  item={item}
                  updateValues={updateValues}
                />
              ))}
            </div>
            <button className="checkout">Checkout</button>
          </div>
        )}
      </>
    </div>
  );
};

export default CartScreen;
