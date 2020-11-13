import React from "react";
import "../css/Shop.css";


const Shop = (props) => {
  return (
    <div >
      <div>
          {props.products}
        </div>
    </div>
  );
};
export default Shop;
