import React from 'react';
// import './ProductCard.css'; 

function ProductCard({ product }) {
  return (
   
    <div className="product-card">
      
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
