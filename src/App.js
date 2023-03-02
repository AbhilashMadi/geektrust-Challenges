import React, {Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Context from "./components/context/Context";
import LandingPage from "./components/Pages/LandingPage";
import Cart from "./components/Pages/Cart";
import Navbar from "./components/atoms/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Context>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      </Context>
    </Fragment>
  );
}

export default App;
