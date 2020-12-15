import React from "react";
import "../css/CartScreen.css";

// <Product wishlist={[]} product={item} />

const CartScreen = (props) => {
  console.log(props);
  return (
    <div>
      <>
        <h2>Cart Screen</h2>
        <div className="container">
          <div className="row1">
            {" "}
            {props.cart.map((item) => (
              <div key={item.id}>
                <h3 className="title">{item.name}</h3>
                <img
                  className="picture"
                  src={item.imageLinks.img1}
                  alt={item.name}
                />
                <h3 className="price"> Price: £{item.price}</h3>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default CartScreen;
