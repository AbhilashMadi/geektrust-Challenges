import React,{useContext} from "react";
import {NavLink} from "react-router-dom";
import { ProductContext } from "../../context/ProductContextProvider";

function Navbar() {

  let {state:{cart}} = useContext(ProductContext);

  return (
    <header id="navbar">
      <NavLink to="/">
      <h2 className="title">
        TeeRex-store
      </h2>
      </NavLink>
      <nav>
        <ul className="navigation">
          <NavLink to="/">
          <li className="navigation__products nav__item">
            Porducts
          </li>
          </NavLink>
          <NavLink to="/cart">
          <li className="navigation__cart nav__item">
            <span className="cart-count">{cart.length}</span>
            <i className="fa fa-shopping-cart"></i>
          </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;