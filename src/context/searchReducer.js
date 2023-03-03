import { ACTIONS } from "./actions";

const {
    GET_SEARCH_STRING,
    CHANGE_CATEGORY
} = ACTIONS;

function searchReducer(state,actions) {
    const {type,payload} = actions;

    switch(type){
        case GET_SEARCH_STRING:
            return {
              ...state,
              searchString: payload,
            };

        case CHANGE_CATEGORY:
            let key = payload[1]; //color type & gender type;
            let store = state[payload[0]] //gender & price
            let newCategory = [...store];

            store.includes(key)
            ? newCategory.splice(newCategory.indexOf(key),1)
            : newCategory.push(key)

            return {
                ...state,
                [payload[0]]:newCategory,
            }

        default:
            return state;
    }
}

export default searchReducer;