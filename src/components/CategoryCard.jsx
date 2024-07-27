import React from 'react';
import './CategoryCard.css';  // Ensure this path is correct

const CategoryCard = ({ title, imgSrc }) => {
  return (
    <div className="category-card">
      <img src={imgSrc} alt={title} /> {/* Use the path to your static image */}
      <h3>{title}</h3>
      <button>Shop {title}</button>
    </div>
  );
};

export default CategoryCard;
