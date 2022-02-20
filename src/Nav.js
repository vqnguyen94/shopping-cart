import { Link } from "react-router-dom";
import "./styles/styles.css";

const Nav = ({ items }) => {
  return (
    <div id="navbar">
      <nav>
        <Link to="/shopping-cart">Home</Link>
        <Link to="/shopping-cart/about">About</Link>
        <Link to="/shopping-cart/shop">Shop</Link>
        <Link to="/shopping-cart/cart">Cart: {items}</Link>
      </nav>
    </div>
  );
};

export default Nav;
