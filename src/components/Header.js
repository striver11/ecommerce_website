import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e) => {
    if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
      setSearchTerm(inputValue);
    }
  };

  const clearSearch = () => {
    setInputValue('');
    setSearchTerm('');
  };

  const goToHome = () => {
    window.location.href = '/homep'; // Redirect to '/homep' when clicking on the image
  };

  const goToSignIn = () => {
    window.location.href = '/signin'; // Redirect to '/signin' when clicking on "Sign In"
  };

  const goToOrders = () => {
    window.location.href = '/orders'; // Redirect to '/orders' when clicking on "Returns & Orders"
  };

  const goToPrime = () => {
    window.location.href = '/prime'; // Redirect to '/prime' when clicking on "Your Prime"
  };

  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
        onClick={goToHome} // Click event to trigger redirection to '/homep'
        style={{ cursor: 'pointer' }} // Set cursor to pointer to indicate it's clickable
      />
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSearch}
        />
        <SearchIcon className="header__searchIcon" onClick={handleSearch} />
      </div>
      <div className="header__nav">
        <div className="header__option" onClick={goToSignIn}>
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option" onClick={goToOrders}>
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option" onClick={goToPrime}>
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
