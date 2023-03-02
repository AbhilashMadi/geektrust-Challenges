import React from "react";
import { Link } from "react-router-dom";

function Navbar({ inCart }) {
  return (
    <header id="navbar">
      <Link to="/">
        <h2>TeeRex-Store</h2>
      </Link>

      <nav>
        <ul>
          <Link to="/">
            <li>Products</li>
          </Link>
          <Link to="/cart">
            <li>
              Cart<span>0</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
