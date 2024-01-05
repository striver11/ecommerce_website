import React from 'react';
import ExpandableDropdown from './ExpandableDropdown';
import categoriesData from '../data/categories.json';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';
import Offer from './Offer';
import OfferData from '../data/offer.json';

function HomeP() {
  return (
    <div>
      <div className="categories">
        {categoriesData.categories.map((category, index) => (
          <ExpandableDropdown key={index} category={category} />
        ))}
      </div>
      <h1 style={{ marginLeft: '10px' }}>Best deals</h1>
      <div className="product-grid">
        {productsData.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <h1 style={{ marginLeft: '10px' }}>Top mobiles</h1>
      <div className="product-grid">
        {productsData.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <h1 style={{ marginLeft: '10px' }}>Offers</h1>
      <div className="offer-grid">
        {OfferData.offers.map((offer, index) => (
          <Offer key={index} offer={offer} />
        ))}
      </div>
    </div>
  );
}

export default HomeP;
