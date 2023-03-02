import React, {Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/Pages/LandingPage";
import Cart from "./components/Pages/Cart";
import Navbar from "./components/atoms/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
}

export default App;
