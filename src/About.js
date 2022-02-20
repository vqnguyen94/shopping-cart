import Nav from "./Nav";
import React, { useEffect } from "react";

const About = ({ items }) => {
  useEffect(() => {
    document.title = "LOOΠΔ | About";
  }, []);

  return (
    <div id="about">
      <Nav items={items} />
      <h1>About</h1>
      <p>
        Loona (commonly stylized as LOONA or LOOΠΔ; Korean: 이달의 소녀,
        lit.'Girl of the Month') is a South Korean girl group formed by
        Blockberry Creative.
      </p>
    </div>
  );
};

export default About;
