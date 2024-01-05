import React from 'react';
// import './ProductCard.css'; 
import  './Offer.css'

function Offer({ offer }) {
  return (
   
    <div className="product-card">
      
      <img src={offer.image} alt={offer.title} />
      
    </div>
  );
}

export default Offer;
