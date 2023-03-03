import { createContext, useReducer } from "react";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";

const productContext = createContext();
function ProductContextProvider({children}){
    const [state,dispatch] = useReducer(productReducer,{
        products:[],
        cart:[],
    })

    const filterIntialState = {
      Color: [],
      Gender: [],
      Price: [],
      Type: [],
      searchString: "",
    };

    const [filterState, filterDispatch] = useReducer(searchReducer,filterIntialState)

    return(
        <productContext.Provider value={{state,dispatch,filterState,filterDispatch}}>
            {children}
        </productContext.Provider>
    )
};

export {ProductContextProvider,productContext}; 
