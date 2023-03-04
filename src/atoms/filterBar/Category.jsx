import React from "react";
import Options from "./Options";

const Category = ({ heading, data }) => {
  return (
    <div className="category">
      <h4 className="category__title">{heading}</h4>
      {data.map((elem, index) => (
        <Options key={index} section={heading} name={elem} />
      ))}
    </div>
  );
};

export default Category;
