import React from "react";
import Product from "../ShopAndProducts/Product";
import "./wishlist.css";
import { Link } from "react-router-dom";

const Wishlist = (props) => {
  return (
    <div>
      <h2 className="wishname" style={{ textTransform: "capitalize" }}>
        {props.name}'s Glowing Wishlist
      </h2>
      {props.wishlist.length === 0 ? (
          
          <h2 className="listEmpty">Oops. Wishlist is empty. <Link to="/shop"><b><i>Go Shopping!</i></b></Link></h2>
        ) : (<>
          {props.wishlist.map((wish) => (
       <Product
         removeProduct={props.removeProduct}
         key={wish.id}
         product={wish}
         wishlist={props.wishlist}
         addToCart={props.addToCart}
       />
     ))} 
        </>)}


     
    </div>
  );
};

export default Wishlist;
