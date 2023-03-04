import React,{useContext} from "react";
import {ProductContext} from "../context/ProductContextProvider";
import {CartEmpty, CartCard} from "../atoms/exports";

function CartPage() {
  let {state:{cart}} = useContext(ProductContext);

  const hideIt = cart.length > 0 ? "visible" : "none";

  return (
    <section className="cart-page">
      <div className="cart-container">
        <h4 className="cart-header">Shopping Cart</h4>
        <div className="cart-products">
          {cart.length ? (
            cart.map((product, index) => (
              <CartCard key={index} {...product}/>
            ))
          ) : (
            <CartEmpty/>
          )}
        </div>
        <div className="cart-total" style={{display:hideIt}}>
          {cart.length > 0
            ? "Total Payment: " + cart.reduce((acc, el) => acc + el.price * el.cartQuantity, 0)
            : null
          }
        </div>
      </div>
    </section>
  );
}

export default CartPage;
