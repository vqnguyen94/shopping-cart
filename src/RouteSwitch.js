import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  const [numItems, setNumItems] = useState(0);

  const addItem = (e) => {
    const item = e.target.parentNode;
    const itemName = item.getElementsByTagName("h2")[0].textContent;
    //Update the quantity if the item is already in cart
    if (itemAlreadyInCart(itemName)) {
      updateQuantity(itemName, "add");
    }
    //New item was added, so add it and update the cart
    else {
      const newItem = {};
      const price = item.getElementsByTagName("h3")[0].textContent;
      newItem.itemName = itemName;
      newItem.price = price;
      newItem.quantity = 1;
      setCart((prevState) => {
        return [...prevState, newItem];
      });
    }
  };

  const itemAlreadyInCart = (itemName) => {
    for (let i = 0; i < cart.length; i++) {
      if (itemName === cart[i].itemName) return true;
    }
  };

  const updateQuantity = (itemName, update) => {
    const newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (itemName === newCart[i].itemName) {
        if (update === "add") {
          newCart[i].quantity += 1;
        }
        //Remove button was pressed
        else {
          newCart[i].quantity -= 1;
          //Check if quantity is 0 and remove from cart if so
          if (newCart[i].quantity < 1) {
            newCart.splice(i, 1);
          }
        }
        setCart(newCart);
        break;
      }
    }
  };

  //For changing quantity within checkout, accesses the item name differently from
  //'addItem' function
  const updateQuantityFromCheckout = (e) => {
    const item = e.target.parentNode.parentNode.parentNode;
    const itemName = item.getElementsByTagName("h2")[0].textContent;
    if (e.target.textContent === "+") {
      updateQuantity(itemName, "add");
    } else {
      updateQuantity(itemName, "remove");
    }
  };

  const removeItem = (e) => {
    const item = e.target.parentNode;
    const itemName = item.getElementsByTagName("h2")[0].textContent;
    updateQuantity(itemName, "remove");
  };

  //Allows the number displayed next to cart to be updated whenever the cart is also updated
  useEffect(() => {
    let newTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      newTotal += cart[i].quantity;
    }
    setNumItems(newTotal);
  }, [cart, numItems]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home items={numItems} />} />
        <Route path="/about" element={<About items={numItems} />} />
        <Route
          path="/shop"
          element={<Shop items={numItems} add={addItem} remove={removeItem} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              items={numItems}
              cart={cart}
              update={updateQuantityFromCheckout}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
