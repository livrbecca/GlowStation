import React from "react";
import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav";
import "../css/Nav.css";

const Navbar = () => {
  return (
    <div className="navbar">
          
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/home">Home</Link>
        <Link to="/loading2">
        <Link to="/quiz">Personalised Skin Quiz</Link>
        </Link>
        <Link to="/shop">Shop</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/product"></Link>
      </Nav>
    </div>
  );
};

export default Navbar;

