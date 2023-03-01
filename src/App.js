import React, { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/Pages/LandingPage";
import Cart from "./components/Pages/Cart";
import { requestManager } from "./utility/fetchData";
import { endPoint } from "./config";
import Navbar from "./components/Navbar";

function App() {
  const [produts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchProducts(url) {
    requestManager(url)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        throw new Error(error);
      });
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts(endPoint);
  }, []);

  console.log(produts);

  return (
    <Fragment>
    <Navbar/>
    <Routes>
      <Route
        exact
        path="/"
        element={<LandingPage loading={loading} products={produts} />}
      />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
    </Fragment>
  );
}

export default App;
