import ACTIONS from "./staticActions";

const {
  FILTER_PRODUCTS_BY_COLOR,
  FILTER_PRODUCTS_BY_GENDER,
  FILTER_PRODUCTS_BY_PRICE,
  FILTER_PRODUCTS_BY_TYPE,
  FILTER_PRODUCTS_BY_SEARCH_STRING,
  ERASE_FILTERS,
} = ACTIONS;

function productReducer(state,action){
    switch(action.type){
        case FILTER_PRODUCTS_BY_COLOR:
            return {
                ...state,
                color: action.payload,
            }

        case FILTER_PRODUCTS_BY_GENDER:
            return {
                ...state,
                gender:action.payload,
            }

        case FILTER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                priceRange: action.payload,
            }

        case FILTER_PRODUCTS_BY_TYPE:
            return {
                ...state,
                productType: action.payload,
            }

        case FILTER_PRODUCTS_BY_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload,
            }

        case ERASE_FILTERS:
            return {
                color: [],
                gender: [],
                price: [],
                type: [],
                searchString: "",
            };
    }
}

export default productReducer;