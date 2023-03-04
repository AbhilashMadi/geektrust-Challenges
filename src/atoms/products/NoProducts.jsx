import React from 'react'
import { Link } from 'react-router-dom';
const imgUrl =
  "https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=170667a&w=0&k=20&c=gEwKNDAlip0HNDoRsG0qHY2TSvJAZmaRw43IUbEqxMM=";

function NoSearchFound() {

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="no-products__card">
      <div className="no-produccts__container">
        <img
          src={imgUrl}
          alt="no-products-found"
          className="no-products__image"
        />
        <h5>Opps! No search results found</h5>
        <br />
        <Link onClick={handleReload}>Go Back</Link>
      </div>
    </div>
  );
}

export default NoSearchFound;