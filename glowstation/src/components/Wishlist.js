import React, { useState } from "react";
import Product from "./Product";
import RemoveWishlist from "./RemoveWishlist";

const Wishlist = (props) => {
  console.log(props.wishlist);

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
