import React,{useState,createContext,useContext,useReducer,useEffect} from "react";
import {endPoint} from "../../config";
import { requestManager } from "../../utility/fetchData";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import ACTIONS from "./reducers/staticActions";

const {PULL_DATA} = ACTIONS;

const cartContext = createContext();
function cartState(){
    return useContext(cartContext);
}

function Context({children}){
    const [loading,setLoading] = useState(true);
    const [state,dispatch] = useReducer(cartReducer,{
        products:[],
        cartPoducts: [],
    });
    const [cartProducts,setCartProducts] = useState([]);
    const [productsState,productsDispatch] = useReducer(
        productReducer,
        {
            color: [],
            gender: [],
            priceRange: [],
            productType: [],
            searchString: "",
        }
    )

    const pullData = (url) => {
        requestManager(url)
        .then((response) => {
            dispatch({
                type: PULL_DATA,
                payload:{
                    products: {
                        products: response.data,
                        cartProducts: cartProducts,
                    }
                }
            })
        })
        .catch((error) => {
            throw new Error(error);
        });

        setLoading(false);
    }

    useEffect(() => {
        pullData(endPoint);
    },[cartProducts]);

    useEffect(() => {
        const cartBag = JSON.parse(localStorage.getItem("cartBag"));
        if(cartBag){
            setCartProducts(cartBag);
        }
    },[cartProducts]);

    // console.log(state.products);

    return(
        <cartContext.Provider value={{
            loading,
            state,
            dispatch,
            productsState,
            productsDispatch,
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default Context;
export {cartState};