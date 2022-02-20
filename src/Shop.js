import Nav from "./Nav";
import React, { useEffect } from "react";
import Item from "./Item";
import hash from "./hash.jpg";
import and from "./&.jpg";
import twelve from "./1200.jpg";
import plus from "./++.jpg";

const Shop = ({ items, add, remove }) => {
  useEffect(() => {
    document.title = "LOOΠΔ | Shop";
  }, []);

  const products = [
    {
      name: "[+ +]",
      price: 10,
      img: plus,
    },
    {
      name: "[#]",
      price: 20,
      img: hash,
    },
    {
      name: "[12:00]",
      price: 30,
      img: twelve,
    },
    { name: "[&]", price: 40, img: and },
  ];

  return (
    <div id="shop">
      <Nav items={items} />
      <h1>Shop</h1>
      <div id="itemDisplay">
        {products.map((product) => {
          return (
            <Item
              add={add}
              remove={remove}
              key={product.price}
              name={product.name}
              price={product.price}
              img={product.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
