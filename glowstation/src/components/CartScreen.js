import React, { useState } from "react";
import "../css/CartScreen.css";
import CartProduct from "./CartProduct";

// <Product wishlist={[]} product={item} />

const CartScreen = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [values, setValues] = useState([]);

  function renderProduct(item, total, price){
    setValues([...values, {id: item.id, total: total, price: price}])
  }
  function calculateValues() {
    let total = 0;
    let amount = 0;
    // eslint-disable-next-line array-callback-return
    values.map((item) => {
      total += item.total
      amount += item.price
    })
    setSubtotal(total);
    setPrice(amount);
  }


  return (
    <div>
      <>
        <h2>Cart Screen</h2>
        <div className="container2">
          <div className="row1">
            <h2>
              Subtotal ({subtotal} items): £ {price}
            </h2>
            
            {props.cart.map((item) =>  {
              
              return(
              <CartProduct
                key={item.id}
                item={item}
                values ={values}
                setValues ={setValues} 
              />)
              
              })}
          </div>
        </div>
      </>
    </div>
  );
};

export default CartScreen;
