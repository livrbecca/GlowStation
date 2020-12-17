import React, { useState } from "react";
import "../css/CartScreen.css";

// <Product wishlist={[]} product={item} />

const CartScreen = (props) => {
  const [qty, setQty] = useState(1);
  console.log(props);
  console.log(props.cart)
  return (
    <div>
      <>
        <h2>Cart Screen</h2>
        <div className="container2">
          <div className="row1">
          <h2>
                Subtotal ({props.cart.reduce((a, c) => a + c.qty, 0)} items) : £
                {props.cart.reduce((a, c) => a + c.price * c.qty, 0)}
              
              </h2>
              
            {props.cart.map((item) => (
              <div key={item.id}>
                <h3 className="title">{item.name}</h3>
                <img
                  className="picture"
                  src={item.imageLinks.img1}
                  alt={item.name}
                />
                <h3 className="price"> Price:£{item.price * qty}</h3>
                <select
                    className="num"
                    value={qty}
                    onChange={(e) =>setQty(e.target.value)}
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
              </div>
            ))}
            
          </div>
          
        </div>
      </>
    </div>
  );
};

export default CartScreen;
