import { Link } from "react-router-dom";
import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="navbar">
        <Link to="/" className="navlink"></Link>
        <br />
        <Link to="/home" className="navlink">
          Home
        </Link>
        <br />
        <Link to="/loading" className="navlink"></Link>
        <br />
        <Link to="/shop" className="shop"></Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
