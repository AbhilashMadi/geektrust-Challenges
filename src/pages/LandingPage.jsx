import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContextProvider";
import { endPoint } from "../config";
import { ACTIONS } from "../context/actions";

import { uID, requestManager, ScrollToTop } from "../utility/utilityExport";
import {SearchBar,FilterBar,Card, NoSearchFound, FilterModel} from "../atoms/exports";

const {
  GET_PRODUCTS,
} = ACTIONS;

function LandingPage() {
  let { state, dispatch, filterState, showFilter } = useContext(ProductContext);

  let { products } = state;
  let { Color, Gender, Price, Type, searchString } = filterState;

  const pulldata = (url) => {
    requestManager(url)
      .then((response) =>
        dispatch({ type: GET_PRODUCTS, payload: response.data })
      )
      .catch((error) => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    pulldata(endPoint);
  }, []);

  const featuresHandler = () => {
    let result = products;

    //search by search query
    if (searchString) {
      searchString = searchString.toLowerCase();
      result = products.filter((item) => {
        if (
          item.name.toLowerCase() === searchString ||
          item.color.toLowerCase() === searchString ||
          item.gender.toLowerCase() === searchString ||
          item.type.toLowerCase() === searchString ||
          item.price === searchString
        )
          {return true};
      });
    }

    // filter by color
    if (Color.length > 0) {
      let picks = [];
      for (let i = 0; i < Color.length; i++) {
        picks = [...picks, ...result.filter((item) => item.color === Color[i])];
      }
      result = picks;
    }
    // filter by Gender
    if (Gender.length > 0) {
      let picks = [];
      for (let i = 0; i < Gender.length; i++) {
        picks = [...picks, ...result.filter((item) => item.gender === Gender[i])];
      }
      result = picks;
    }

    // filter by type
    if (Type.length > 0) {
      let picks = [];
      for (let i = 0; i < Type.length; i++) {
        picks = [...picks, ...result.filter((item) => item.type === Type[i])];
      }
      result = picks;
    }
    
    // filter by price
    if (Price.length > 0) {
      let picks = [];
      for (let i = 0; i < Price.length; i++) {
        let [min, max] = Price[i].split("-");
        picks = [
          ...picks,
          ...result.filter((item) => {
            return (+item.price >= +min && +item.price <= +max) ? true : false;
          }),
        ];
      }
      result = picks;
    }
    return result;
  };

  return (
    <main className="products-landing-page">
      <aside className="filter-Bar">
        <SearchBar />
      </aside>
      <section className="products-container">
        <div>
          <FilterBar />
          {showFilter && <div className="filter-focus"><FilterModel /></div>}
        </div>
        <div className="products">
          {featuresHandler().length === 0 && <NoSearchFound />}
          {featuresHandler().map((item) => (
            <Card key={uID()} item={item} />
          ))}
        </div>
        <ScrollToTop />
      </section>
    </main>
  );
}

export default LandingPage;
