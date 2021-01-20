import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Nav.css";
import Layout from "./Layout";
import Search from "../Search/Search";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/home">
        <h2 className="glowNav">Glow Station</h2>
      </Link>
      <Search SearchBar={props.SearchBar} name={props.name} />
      <Nav defaultActiveKey="/home" className="LI">
        <Link className="links RB" to="/loading2">
          Routine Builder
        </Link>
        <Link className="links" to="/cart">
          Cart ({props.cart.length})
        </Link>
        <Link to="/product"></Link>
        <Layout wishlist={props.wishlist} />
      </Nav>
    </div>
  );
};

export default Navbar;
