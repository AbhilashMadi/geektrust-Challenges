/*
** States
*/
const intialState = {
    products: [],
    cart: [],
}

/*
** Actions
*/
const ACTIONS = {
  /*product reducer*/
  GET_PRODUCTS: "get-products",
  ADD_PRODUCT_TO_CART: "add-product-to-cart",
  REMOVE_PRODUCT_FROM_CART: "remove-produt-from-cart",
  UPDATE_PRODUCT_QUANTITY: "update-product-quantity",

  /*search reducer*/
  GET_SEARCH_STRING: "get-search-string",
  CHANGE_CATEGORY: "change-category",

  /*Responsive Filter*/
  SHOW_FILTER: "show-res-filter",
  CLOSE_FILTER: "close-filter",
  RESET_PRODUCTS:"reset-products"
};

export {intialState,ACTIONS};