import {ACTIONS} from "./actions";

const {SHOW_FILTER,CLOSE_FILTER} = ACTIONS;;

function ShowFilterReducer(state,action) {
  switch(action.type){
    case SHOW_FILTER:
        return true;

    case CLOSE_FILTER:
        return false;

    default:
        return state;
  }
}

export default ShowFilterReducer;