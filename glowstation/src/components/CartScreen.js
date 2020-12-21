import React, { useState } from "react";
import "../css/CartScreen.css";
import CartProduct from "./CartProduct";

// <Product wishlist={[]} product={item} />

const CartScreen = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [values, setValues] = useState([]);

  function idExists(id){
    return values.some(e => e.id === id)
  }

  function updateValues(item, count, price){
    if (!idExists(item.id)){
      setValues([...values, {id: item.id, count: count, price: price}])
    } else {
      const itemIndex = values.findIndex(e => e.id === item.id)
      let tempValues = [...values];
      tempValues[itemIndex] = {...tempValues[itemIndex], count: count, price: price}
    }
  }
  function calculateValues() {
    let total = 0;
    let amount = 0;
    // eslint-disable-next-line array-callback-return
    values.map((item) => {
      total += item.count
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
