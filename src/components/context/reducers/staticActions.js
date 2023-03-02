const ACTIONS = {
    //cart reducer actions
    PULL_DATA: "pull-data",
    ADD_PRODUCT_TO_CART:"add-product-to-cart",
    REMOVE_PRODUCT_FROM_CART:"remove-product-from-cart",
    UPDATE_CART_QUANTITY:"update-cart-quantity",
    DELETE_ITEM_FROM_CART: "delete-item-from-cart",

    //product reducer actions
    FILTER_PRODUCTS_BY_COLOR: "filter-products-by-color",
    FILTER_PRODUCTS_BY_GENDER: "filter-products-by-gender",
    FILTER_PRODUCTS_BY_PRICE: "filter-products-by-price",
    FILTER_PRODUCTS_BY_TYPE: "filter-prodicts-by-type",
    FILTER_PRODUCTS_BY_SEARCH_STRING:"filter-products-by-search-string",
    ERASE_FILTERS:"erases-filters",
}

export default ACTIONS;