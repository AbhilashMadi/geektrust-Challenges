import { intialState,ACTIONS } from "./actions";

const {
  GET_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_QUANTITY,
} = ACTIONS;

function productReducer(state=intialState,actions) {
    const {type,payload} = actions;
    
    switch(type){
        case GET_PRODUCTS:
            return {
                ...state,
                products:[...payload],
            }

        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart:[...state.cart,{...payload,cartQuantity:1}]
            }

        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart:state.cart.filter((product) => product.id!==payload); 
            }

        case UPDATE_PRODUCT_QUANTITY:
            return {
                ...state,
                cart:state.cart.filter((product) => product.id === payload.id ? product.cartQuantity=payload[1]:p)
            }
        
        default:
            return state;
    }
}

export default productReducer