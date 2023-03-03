import React from "react";
import {Link} from "react-router-dom";

function CartEmpty() {
    
  return (
    <section className="empty-cart">
      <div className="dialogue-box box">
        <h2>Your Cart is Found Empty</h2>
        <p>
          Please visit the products page and add some items to your cart for
          purchase as your cart was found to be empty.
        </p>
        <img
          src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
          alt="empty-cart"
        />
        <Link to="/">
        <div className="btn btn-back">Products</div>
        </Link>
      </div>
    </section>
  );
}

export default CartEmpty;