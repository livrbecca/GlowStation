import React from "react";
//import { Link } from "react-router-dom"
import Nav from "react-bootstrap/Nav";
import "../css/Nav.css";

const Navbar = () => {
  return (
    <div className="navbar">
          
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link eventKey="link-1">Skin Quiz</Nav.Link>
        <Nav.Link href="/shop">Shop</Nav.Link>
        <Nav.Link eventKey="link-2">Skin Education Station</Nav.Link>
      </Nav>
    </div>
  );
};

export default Navbar;

// import { Link } from "react-router-dom";
// import React from "react";

// const Header = (props) => {
//   return (
//     <React.Fragment>
//       <div className="navbar">
//       <Link to="/" className="navlink">
//       </Link>
//       <br />
//       <Link to="/home" className="navlink">
//         Home
//       </Link>
//       <br />
//       <Link to="/loading" className="navlink">
//       </Link>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Header;
