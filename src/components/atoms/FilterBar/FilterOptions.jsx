import React , {Fragment} from "react";
import {cartState} from "../../context/Context";
import ACTIONS from "../../context/reducers/staticActions";

const {
    FILTER_PRODUCTS_BY_COLOR,
    FILTER_PRODUCTS_BY_GENDER,
    FILTER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_TYPE,
} = ACTIONS;

function filterOptions({items,group}){

    const {
      productState: { color, gender, priceRange, productType },
      productDispatch,
    } = cartState();

    const setFiltersState = (state) => {
        productDispatch({ type: FILTER_PRODUCTS_BY_COLOR, payload: state.colour });
        productDispatch({ type: FILTER_PRODUCTS_BY_GENDER, payload: state.gender });
        productDispatch({ type: FILTER_PRODUCTS_BY_PRICE, payload: state.priceRange });
        productDispatch({ type: FILTER_PRODUCTS_BY_TYPE, payload: state.productType });
    };

    const handleFilerChanges = (e) => {
        const filterBar = document.getElementById("filters");
        let selectedFilters = filterBar.querySelectorAll(
          'input[type="checkbox"]:checked'
        );

        let filterState = {
            color: [],
            gender: [],
            priceRange: [],
            productType: [],
            }

            for(let i=0; i<selectedFilters.length; i++){
                filterState[checkbox.dataset.filter].push(checkbox.id);
            }

            setFiltersState(filterState);
    }

    return(
        <Fragment>
            <form>
                {
                    items?.length && 
                    (
                        items.map((item) => {
                            let checked = false;
                            if(
                                color.includes(item.id) ||
                                gender.includes(item.id) ||
                                priceRange.includes(item.id) ||
                                productType.includes(item.id)
                            ) {
                                checked = true;
                            }

                            return (
                              <label for={item.name}>
                                <input
                                  type="checkbox"
                                  key={item.id}
                                  id={item.id}
                                  onChange={handleFilerChanges}
                                  checked={checked}
                                />
                                {item.name}
                              </label>
                            );
                        })
                    )
                }
            </form>
        </Fragment>
    )
}