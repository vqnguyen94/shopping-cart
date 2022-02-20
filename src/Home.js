import Nav from "./Nav";
import React, { useEffect } from "react";

const Home = ({ items }) => {
  useEffect(() => {
    document.title = "LOOΠΔ | Home";
  }, []);

  return (
    <div>
      <Nav items={items} />
      <h1 className="home-title">LOOΠΔ</h1>
    </div>
  );
};

export default Home;
