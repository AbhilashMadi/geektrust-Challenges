import React,{useContext,useState} from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import {ACTIONS} from "../../context/actions";

const {GET_SEARCH_STRING} = ACTIONS;

function SearchBar() {
  let {filterDispatch} = useContext(ProductContext);
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

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={searchHandler}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;