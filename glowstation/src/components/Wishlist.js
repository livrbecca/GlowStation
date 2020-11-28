import React from "react";
import Product from "./Product";


const Wishlist = (props) => {
  return (
    <>
      <div>
        <h2 style={{ textTransform: "capitalize" }}>
          {props.name}'s Glowing Wishlist
        </h2>
        <Product addProduct={props.addProduct} key={props.key} product={props.product} />
      </div>
    </>
  );
};

export default Wishlist;
