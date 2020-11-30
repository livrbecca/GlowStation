import React from "react";
import Product from "./Product";


const Wishlist = (props) => {
  console.log(props.wishlist);
  return (
    <>
      <h2 style={{ textTransform: "capitalize" }}>
        {props.name}'s Glowing Wishlist
      </h2>
      {props.wishlist.map((wish)=> (
        <Product addProduct={props.addProduct} key={wish.id} product={wish} />
      ))}
    </>
  );
}

export default Wishlist;
