import React from "react";
import {Link} from "react-router-dom";

function Navbar({inCart}) {
  return (
    <nav id="navbar">

      <Link to="/">
      <h2>TeeRex-Store</h2>
      </Link>

      <ul>
        <Link to="/">
        <li>Products</li>
        </Link>
        <Link to="/cart">
        <li>
          Cart<span>03</span>
        </li>
        </Link>   
      </ul>
    </nav>
  );
}

export default Navbar;