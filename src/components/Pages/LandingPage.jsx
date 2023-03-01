import React, { Fragment } from "react";
import ProductCard from "../ProductCard";

function LandingPage({ loading, products }) {
  return (
    <Fragment>
      {/* <div>LandingPage</div> */}
      <ProductCard/>
    </Fragment>
  );
}

export default LandingPage;
