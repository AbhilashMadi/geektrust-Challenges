import React from "react"
import { createContext, useReducer } from "react";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";

const ProductContext = createContext();
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
        <ProductContext.Provider value={{state,dispatch,filterState,filterDispatch}}>
            {children}
        </ProductContext.Provider>
    )
};

export {ProductContextProvider,ProductContext}; 
