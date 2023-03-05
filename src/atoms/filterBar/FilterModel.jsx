import React,{useContext} from "react";
import Category from "./Category";
import { ProductContext } from "../../context/ProductContextProvider";
import {ACTIONS} from "../../context/actions.js";

const {CLOSE_FILTER} = ACTIONS;

const FiltersModel = () => {

  const { showFilter, showFilterDispatch } = useContext(ProductContext);
  console.log("Filter Comp", showFilter)

  const closeFilterAction = () => {
    showFilterDispatch({ type: CLOSE_FILTER});
  };

  return (
    <div className="filter-model">
      <h4 className="filter-title">Filter Products</h4>
      <div className="filter-container">
        <Category
          heading={"Color"}
          data={["Red", "Blue", "Green", "Yellow", "Grey", "White"]}
        />
        <Category heading={"Gender"} data={["Men", "Women"]} />
        <Category heading={"Price"} data={["0-250", "251-300", "350-450"]} />
        <Category heading={"Type"} data={["Polo", "Hoodie", "Basic"]} />
      </div>
      <div className="close-btn">
        <button className="btn" onClick={closeFilterAction}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default FiltersModel;
