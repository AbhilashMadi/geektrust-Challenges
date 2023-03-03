import React, { Fragment } from "react";
import {Navbar} from "./atoms/exports";
import {LandingPage,CartPage,NoPages} from "./pages/exportPage";
import {Routes,Route} from "react-router-dom";
import { ProductContextProvider } from "./context/ProductContextProvider";

function App() {
  return (
    <Fragment>
      <ProductContextProvider>
      <Navbar/>
    <Routes>
      <Route index path="/" element={<LandingPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="*" element={<NoPages/>}/>
    </Routes>
    </ProductContextProvider>
    </Fragment>
  );
}
export default App;
