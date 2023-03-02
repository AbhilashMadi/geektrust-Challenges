import {useState,createContext,useContext,useEffect} from "react";
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
    const [loading,setLoading] = useState([]);
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

    return(
        <cartContext.Provider value={{
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
export {cartContext};