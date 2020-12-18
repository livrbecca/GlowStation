import React, { useEffect, useState } from "react";

const CartProduct = ({ item, subtotal, setSubtotal, price, setPrice }) => {
  const [quantity, setQuantity] = useState(1);

  function calculateSubtotal() {
    let total = subtotal;
    setSubtotal(total + quantity);
  }
  function calculatePrice() {
    let old_price = price;
    let item_price = item.price * quantity;
    setPrice(old_price + item_price);
  }
  useEffect(() => {
    calculateSubtotal();
    calculatePrice();
  }, [quantity]);
  return (
    <div key={item.id}>
      <h3 className="title">{item.name}</h3>
      <img className="picture" src={item.imageLinks.img1} alt={item.name} />
      <h3 className="price"> Price:£{item.price * quantity}</h3>
      <select
        id={item.id}
        className="num"
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
          console.log(item);
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
