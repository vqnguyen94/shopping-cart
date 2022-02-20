import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import hash from "./hash.jpg";
import and from "./&.jpg";
import twelve from "./1200.jpg";
import plus from "./++.jpg";

const Cart = ({ items, cart, update }) => {
  const itemImages = {
    "[#]": hash,
    "[&]": and,
    "[12:00]": twelve,
    "[+ +]": plus,
  };
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let newTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i].price);
      console.log(cart[i].quantity);
      newTotal += parseInt(cart[i].price) * cart[i].quantity;
    }
    setTotal(newTotal);
  };

  //Changes the total in checkout whenever the cart updates
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  useEffect(() => {
    document.title = "LOOΠΔ | Cart";
  }, []);

  return (
    <div id="cart">
      <Nav items={items} />
      <h1>Cart</h1>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.price} className="cart-item">
              <h2>{item.itemName}</h2>
              <img src={itemImages[item.itemName]} alt="album cover" />
              <h3>Price: {item.price}</h3>
              <div className="quantity">
                <p>Quantity:</p>
                <div className="quantity-change">
                  <button onClick={update}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={update}>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Total: {total}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
