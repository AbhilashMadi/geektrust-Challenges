import React,{useContext} from "react";
import { ProductContext } from "../../context/ProductContextProvider";

const CartProducts = (props) => {
  const { dispatch } = useContext(ProductContext);
  console.log(props.product.product);
  return (
    <div className="cart-prod">
      <div className="cart-prod-img">
        <img src={props.imageURL} alt={props.name} />
      </div>
      <div className="cart-prod-desc">
        <h3>{props.name}</h3>
        <p>Rs {props.price}</p>
      </div>
      <div className="cart-prod-btn">
        <select
          id=""
          onChange={(e) =>
            dispatch({ type: "CHANGE_QTY", payload: [props, e.target.value] })
          }
        >
          {[...new Array(props.quantity)].map((el, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button
          className="remove-from-cart-btn"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: props.id })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
