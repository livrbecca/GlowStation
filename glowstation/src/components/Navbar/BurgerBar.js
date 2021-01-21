import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const BurgerBar = (props) => {
  const [burgerbarClass, setBurgerbarClass] = useState(props.burgerbar);

  const closeHandler = (e) => {
    e.preventDefault();
    setBurgerbarClass("burgerbar close");
    setTimeout(() => {
      props.close();
    }, 1000);
  };

  return (
    <div className={burgerbarClass}>
      <button id="close" onClick={closeHandler}>
        &times; close
      </button>
      <Nav defaultActiveKey="/home" className="LI">
        <Link className="links" to="/home">
          Home
        </Link>

        <Link className="links" to="/shop">
          Shop
        </Link>
        <Link className="links" to="/wishlist">
          Wishlist ({props.wishlist.length})
        </Link>
        <Link className="links" to="/skineducation">
          Skin Education
        </Link>
        <Link className="links" to="/search">
          Search
        </Link>
        <Link to="/product"></Link>
      </Nav>
    </div>
  );
};

export default BurgerBar;
