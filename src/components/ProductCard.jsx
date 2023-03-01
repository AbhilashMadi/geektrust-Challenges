import React from 'react'

function ProductCard({product}) {
  return (
    <div id="product-card">
      <figure>
        <h4 className="product-name">Product Name Here</h4>
        <img
          src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png"
          alt="product-title"
          className="product-image"
        />
      </figure>
      <div className="product-details">
        <h5 className="product-price">Price: Rs300</h5>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard