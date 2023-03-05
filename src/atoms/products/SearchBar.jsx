import React,{useContext,useState} from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import {ACTIONS} from "../../context/actions";

const {GET_SEARCH_STRING, SHOW_FILTER, RESET_PRODUCTS} = ACTIONS;

function SearchBar() {
  let { filterDispatch, showFilterDispatch, dispatch } = useContext(
    ProductContext
  );
  const [searchText,setSearchText] = useState("")

  //debouncing technique (we are using button so here debounce is optional)

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     filterDispatch({type:GET_SEARCH_STRING,payload:searchText});
  //   },[400])
  //   return () => clearTimeout(timer);
  // },[searchText]);
  
  const searchHandler = () => {
    filterDispatch({type:GET_SEARCH_STRING,payload:searchText});
  }
  
  const keyPressSearch = (event) => {
    if (event.key === "Enter"){
      filterDispatch({type:GET_SEARCH_STRING,payload:searchText});
    }
  }

  const handleResponsiveFilterBar = () => {
    showFilterDispatch({type:SHOW_FILTER});
    dispatch({type: RESET_PRODUCTS})
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={keyPressSearch}
      />
      <button onClick={searchHandler}>
        <i className="fa fa-search"></i>
      </button>
      <button className="filter-btn" onClick={handleResponsiveFilterBar}>
        <i className="fa fa-filter"></i>
      </button>
    </div>
  );
}

export default SearchBar;