// ProductList.js
import React, { useEffect, useState } from 'react';
import './ProductList.css'; // Import the CSS file for styling
import productsData from './products.json'; // Import your product data

function ProductList({ searchTerm }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products); // Set your product data here
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product &&
        product.name &&
        searchTerm &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="products">
      <h2>Featured Products</h2>
      <div className="products__list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              {/* Add more details as needed */}
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
