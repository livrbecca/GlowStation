import React from "react";
import "../css/Shop.css";

const Product = (props) => {
  let {
    brand,
    name,
    description: { smallDes },
    imageLinks: { img1 },
  } = props.product;
  return (
    <div className="imgCont">
      <img className="displayPics" src={img1} alt="products"/>
      <h3> {brand}</h3>
      <h2> {name}</h2>
      <h4> {smallDes}</h4>
    </div>
  );
};
export default Product;
