import React, { useState } from "react";
import "../css/CartScreen.css";
import CartProduct from "./CartProduct";

// <Product wishlist={[]} product={item} />

const CartScreen = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  const [price, setPrice] = useState(0);

  console.log(props);
  console.log(props.cart);

  return (
    <div>
      <>
        <h2>Cart Screen</h2>
        <div className="container2">
          <div className="row1">
            <h2>
              Subtotal (
              
              items ) : £
              {props.cart.reduce(
                (accumulator, product) =>
                  accumulator + product.price * quantity,
                0
              )}
            </h2>

            {props.cart.map((item) => (
              <CartProduct
                item={item}
                subtotal={subtotal}
                setSubtotal={setSubtotal}
                price={price}
                setPrice={setPrice}
              />
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default CartScreen;
