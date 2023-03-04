import React,{useContext} from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import {ACTIONS} from "../../context/actions";

const {ADD_PRODUCT_TO_CART,REMOVE_PRODUCT_FROM_CART} = ACTIONS;

function Card({item}) {
  let {imageURL,color,id,name,price} = item;
  let {
    state: {cart},dispatch,
  } = useContext(ProductContext);

  return (
    <div className="product">
      <div className="product__container">
        <h4 className="product__title">{name}</h4>
        <img src={imageURL} alt={name} style={{ width: "100%" }} />
        <div className="product__description">
          <div>
            <div className="product__price">Price:Rs {price}</div>
            <div
              className="product__color"
              style={{ backgroundColor: `${color}` }}
            >
              color
            </div>
          </div>
          {cart.some((product) => product.id === id) ? (
            <button
              className="btn add-to-cart"
              onClick={() =>
                dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: id })
              }
              style={{ backgroundColor: "#ff3838", border:"none" }}
            >
              REMOVE ITEM
            </button>
          ) : (
            <button
              className="btn add-to-cart"
              onClick={() =>
                dispatch({ type: ADD_PRODUCT_TO_CART, payload: item })
              }
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card