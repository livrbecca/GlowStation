import React, { useState } from "react";

const CartProduct = ({ item, updateValues }) => {
  const [quantity, setQuantity] = useState(1);
  const [subprice, setSubPrice] = useState(0);

  function updateCart(){
    setSubPrice(item.price * quantity)
    updateValues(item, quantity, subprice)
  }
  updateCart()
  
  
  return (
    <div key={item.id}>
      <h3 className="title">{item.name}</h3>
      <img className="picture" src={item.imageLinks.img1} alt={item.name} />
      <h3 className="price"> Price:£{subprice}</h3>
      <select
        id={item.id}
        className="num"
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
          updateCart()
        }}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CartProduct;
