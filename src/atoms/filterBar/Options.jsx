import React,{useContext} from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import { ACTIONS } from "../../context/actions";

const { CHANGE_CATEGORY } = ACTIONS;

const Options = ({ name, section }) => {
  const { filterDispatch } = useContext(ProductContext);
  const handleChange = (e) => {
    filterDispatch({ type: CHANGE_CATEGORY, payload: [section, name] });
  };
  return (
    <div className="category__option">
      <input
        className="category__checkbox"
        type={"checkbox"}
        name={name}
        data_belongs={section}
        onChange={handleChange}
        id={name}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default Options;
