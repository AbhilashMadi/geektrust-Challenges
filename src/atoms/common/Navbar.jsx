import React from "react";
import {useNavigate} from "react-router-dom";

function Navbar({cartCount}) {
  const navigate = useNavigate();

  return (
    <header id="navbar">
      <h2 className="title" onClick={() => navigate("/")}>
        TeeRex-store
      </h2>
      <nav>
        <ul className="navigation">
          <li onClick={() => navigate("/")} className="navigation__products">
            Porducts
          </li>
          <li onClick={() => navigate("/cart")} className="navigation__cart">
            <span className="cart-count">{0}</span>
            <i class="fa fa-shopping-cart"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;