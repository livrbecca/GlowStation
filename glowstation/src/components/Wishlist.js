import React from "react";
import Product from "./Product";

const Wishlist = (props) => {
  

  return (
    <div>
      <h2 style={{ textTransform: "capitalize" }}>
        {props.name}'s Glowing Wishlist
      </h2>
      {props.wishlist.map((wish) => (
        <Product
          removeProduct={props.removeProduct}
          key={wish.id}
          product={wish}
          wishlist={props.wishlist}
        />
      ))}
    </div>
  );
};

export default Wishlist;
