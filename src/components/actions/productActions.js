import ACTIONS from "./staticActions";

const {
    FILTER_PRODUCTS_BY_COLOR,
    FILTER_PRODUCTS_BY_GENDER,
    FILTER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_TYPE,
    FILTER_PRODUCTS_BY_SEARCH,
} = ACTIONS;

function productActions(state,action) {
    switch(action.type){
        case FILTER_PRODUCTS_BY_COLOR:
            return {
                ...state, pickByColor:[...satisfies.pickByColor,action.payload]
            };
        
        case FILTER_PRODUCTS_BY_GENDER:
            return {
                ...state,
                pickByGender:[
                    ...state.pickByGender,action.payload,
                ]
            };
        
        case FILTER_PRODUCTS_BY_TYPE:
            return {
                ...state, pickByType:[
                    ...state.pickByType, action.payload
                ]
            };

        case FILTER_PRODUCTS_BY_PRICE:
            return {
                ...state, pickByPrice:[
                    ...state.pickByPrice,
                    action.payload,
                ]
            };

        case FILTER_PRODUCTS_BY_SEARCH:
            return {
                ...state,searchString:action.payload,
            };
        
        case CLEAR_FILTERS:
            return {
                pickByColor:[],pickByGender:[],
                pickByPrice:[],
                pickByType:[],
            }
    }
}

export default productActions