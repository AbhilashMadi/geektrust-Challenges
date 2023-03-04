import React,{useState,useContext, useEffect} from "react";
import {ACTIONS} from "../../context/actions";
import { ProductContext } from "../../context/ProductContextProvider";

const {REMOVE_PRODUCT_FROM_CART, UPDATE_PRODUCT_QUANTITY} = ACTIONS;

function CartCard(props) {
  const [qtyCount, setQtyCount] = useState(1);
  const {dispatch} = useContext(ProductContext);

  const {imageURL,name,price,quantity} = props;

  const incrementQuantity = () => {
      if(qtyCount > quantity){
        alert("out of stock")
        return;
      }
      setQtyCount(qtyCount + 1);
  };

  const decrementQuantity = () => {
    if (qtyCount > 1) {
      setQtyCount(qtyCount - 1);
    }
  };

  useEffect(() => {
          dispatch({
            type: UPDATE_PRODUCT_QUANTITY,
            payload: [props,qtyCount],
          });
  },[qtyCount])

  const handleDelete = () => {
    dispatch({type:REMOVE_PRODUCT_FROM_CART,payload: props.id})
  }

  return (
    <div className="cart-card__item">
      <div className="cart-card__container">
        <div className="cart-card__image">
          <img src={imageURL} alt="" />
        </div>
        <div className="cart-card__description">
          <h4 className="cart-card__name">{name}</h4>
          <p className="cart-card__price">Rs:{price}</p>
        </div>
        <div className="cart-card__counter">
          <button onClick={decrementQuantity}>-</button>
          <p>{qtyCount}</p>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button className="cart-card__delete" onClick={handleDelete}>Remove</button>
      </div>
    </div>
  );
}

export default CartCard;