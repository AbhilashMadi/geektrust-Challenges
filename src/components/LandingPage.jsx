import React,{Fragment} from "react";
import Navbar from "./Navbar";

function LandingPage({loading,products}) {
  return (
    <Fragment>
      <Navbar/>
      <div>products</div>
    </Fragment>
  )
}

export default LandingPage;