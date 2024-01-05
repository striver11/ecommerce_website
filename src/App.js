import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeP from './components/HomeP';
import ProductList from './ProductList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <ProductList searchTerm={searchTerm} />
      ) : (
        <HomeP />
      )}
      <Footer />
    </div>
  );
}

export default App;
