
import ACTIONS from "./staticActions";
const {PULL_DATA,ADD_PRODUCT_TO_CART,REMOVE_PRODUCT_FROM_CART,UPDATE_CART_QUANTITY} = ACTIONS;

function cartActions(state,action) {
  switch(action.type){
    case PULL_DATA:
        return {...state, products:action.payload};
    
    case ADD_PRODUCT_TO_CART:
        return {...state, cart:[...state.cart,{...action.payload,quantity:1}]}
    
    case REMOVE_PRODUCT_FROM_CART:
        return{
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id)
        }
    
    case UPDATE_CART_QUANTITY:
        return {
            ...state,
            cart: state.cart.filter((cartItem) => {
                return cartItem.id !== action.payload.id
            })
        }

    default:
        return state;
  };
};

export default cartActions;