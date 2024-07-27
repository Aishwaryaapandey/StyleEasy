import React from "react";
import "./ProductCard.css"; // Ensure this path is correct

const ProductCard = ({ name, imgSrc, price }) => {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
