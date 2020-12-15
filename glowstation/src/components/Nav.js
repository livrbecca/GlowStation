import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../css/Nav.css";


const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/home">
        <h2 className="glowNav">Glow Station</h2>
      </Link>
          
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/home">Home</Link>
        <Link to="/loading2">Routine Builder</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart ({props.cart.length})</Link>
        <Link to="/product"></Link>
      </Nav>
    </div>
  );
};

export default Navbar;
