import React, { useState } from "react";
import BurgerBar from "./BurgerBar";
import Toggle from "./Toggle";
import "./BurgerBar.css";

const Layout = (props, { children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

const burgerbarCloseHandler = () => {
    setSidebarOpen(false)
}

  let burgerbar;
  if (sidebarOpen) {
    burgerbar = <BurgerBar wishlist={props.wishlist} close={burgerbarCloseHandler} burgerbar={"burgerbar"} />;
  }
  return (
    <>
      {burgerbar}
      <Toggle click={openHandler} />
      <p>{children}</p>
    </>
  );
};

export default Layout;
