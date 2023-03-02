import ACTIONS from "./staticActions"

const {
    PULL_DATA,
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    UPDATE_CART_QUANTITY,
    DELETE_ITEM_FROM_CART,
} = ACTIONS;

function cartReducer(state,action) {
  switch(action.type){

    case PULL_DATA:{
      const { products, cartProducts } = action.payload; 
      return {
        ...state,
        products,
        cartProducts,
      };
    }

    case ADD_PRODUCT_TO_CART: {
      let presentCartState = [
        ...state.cartProducts,
        { ...action.payload, quantity: 1 },
      ];
      //if a product added to the cart then it's quantity must be 1
      localStorage.setItem("cartBag", JSON.stringify(presentCartState));
      /*
      storing the cart items and it's details in browser local storage so that when user logins after closing the appliction will get the previsous produccts lied in cart
      */
      return {
        ...state,
        cartProducts: presentCartState,
      };
    }

    case REMOVE_PRODUCT_FROM_CART:
      const filteredCartItems = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );

      localStorage.setItem("cartBag",JSON.stringify(filteredCartItems));
      return { ...state, cartProducts: filteredCartItems };

    case UPDATE_CART_QUANTITY:
      const updatedCart = state.cartProducts.filter((product) => {
        return product.id === action.payload.id
        ? product.quantity = action.payload.quantity
        : product.quantity;
      })

      localStorage.setItem("cartBag",JSON.stringify(updatedCart));
      return{
        ...state,
        cart: updatedCart,
      };

    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartProducts: [],
      };

    default:
      return state;
  }
}

export default cartReducer;