import React,{useState,useEffect} from "react";
import { Routes,Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import { requestManager } from "./utility/fetchData";
import {endPoint} from "./config";

function App() {

  const [produts,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  
  function fetchProducts(url){
    requestManager(url)
    .then((response) => setProducts(response.data))
    .catch((error) => {throw new Error(error)})
    setLoading(false);
  }

  useEffect(()=>{
    fetchProducts(endPoint);
  },[]);

  return (
    <Routes>
        <Route exact path="/" element={<LandingPage loading={loading} products={produts}/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
  )
}

export default App;