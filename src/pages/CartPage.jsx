import React,{useContext} from "react";
import {ProductContext} from "../context/ProductContextProvider";
import {CartProducts,CartEmpty} from "../atoms/exports";

function CartPage() {
  let {state:{cart}} = useContext(ProductContext);

  return (
    <section className="cart-page">
      <div className="cart-container">
        <h4 className="cart-header">Shopping Cart</h4>
        <div className="cart-products">
          {cart.length ? (
            cart.map((product, index) => (
              <CartProducts key={index} {...product} />
            ))
          ) : (
            <CartEmpty />
          )}
        </div>
        <div className="cart-total">
          total:{" "}
          {cart.length > 0
            ? cart.reduce((acc, el) => acc + el.price * el.cartQuantity, 0)
            : 0
          }
        </div>
      </div>
    </section>
  );
}

export default CartPage;
