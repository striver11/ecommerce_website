import React, { useState } from 'react';
import './ExpandableDropdown.css'; 

const ExpandableDropdown = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="expandable-dropdown"
      onMouseEnter={handleHover}
      onMouseLeave={handleClose}
    >
      <span>{category.name}</span>
      {category.subcategories && isOpen && (
        <div className="subcategories">
          {category.subcategories.map((subcategory, index) => (
            <ExpandableDropdown key={index} category={subcategory} />
          ))}
        </div>
      )}
      {category.subsubcategories && isOpen && (
        <div className="subsubcategories">
          {category.subsubcategories.map((subsubcategory, index) => (
            <div key={index}>
              {subsubcategory.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableDropdown;
