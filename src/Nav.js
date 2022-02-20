import { Link } from "react-router-dom";
import "./styles/styles.css";

const Nav = ({ items }) => {
  return (
    <div id="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart: {items}</Link>
      </nav>
    </div>
  );
};

export default Nav;
