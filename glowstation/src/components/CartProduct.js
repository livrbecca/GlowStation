import React, { useState } from "react";

const CartProduct = ({ item, updateValues, values }) => {
  const [quantity, setQuantity] = useState(1);

  const subprice = item.price * quantity;
  
  const handleChange = (e) => {
    setQuantity(Number(e.target.value))
  }

  return (
    <div key={item.id}>
      <h3 className="title">{item.name}</h3>
      <img className="picture" src={item.imageLinks.img1} alt={item.name} />
      <h3 className="price"> Price:£{subprice.toFixed(2)}</h3>
      <select
        id={item.id}
        className="num"
        value={quantity}
        onChange={(e) => {
          handleChange(e);
          updateValues(item, Number(e.target.value), (item.price * Number(e.target.value)))
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
