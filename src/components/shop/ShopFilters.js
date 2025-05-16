// ShopFilters.jsx
import React from 'react';

const ShopFilters = ({
  categories,
  selectedCategories,
  onCategoryToggle,
  priceRange,
  onPriceChange,
  inStockOnly,
  onStockToggle
}) => {
  const handleMinPriceChange = (e) => {
    const min = e.target.value;
    onPriceChange(min, priceRange[1]);
  };

  const handleMaxPriceChange = (e) => {
    const max = e.target.value;
    onPriceChange(priceRange[0], max);
  };

  return (
    <>
      <div className="filter-section mb-4">
        <h3 className="h5 mb-3">Price Filter</h3>
        <div>
          <div className="mb-3 d-flex align-items-center gap-2 small fw-semibold text-secondary">
            <label htmlFor="minPrice" className="flex-shrink-0" style={{ width: '4rem' }}>Min price</label>
            <input 
              type="number" 
              id="minPrice" 
              className="form-control form-control-sm" 
              min="0" 
              max={priceRange[1]} 
              value={priceRange[0]} 
              onChange={handleMinPriceChange}
            />
          </div>
          <div className="mb-3 d-flex align-items-center gap-2 small fw-semibold text-secondary">
            <label htmlFor="maxPrice" className="flex-shrink-0" style={{ width: '4rem' }}>Max price</label>
            <input 
              type="number" 
              id="maxPrice" 
              className="form-control form-control-sm" 
              min={priceRange[0]} 
              max="1000" 
              value={priceRange[1]} 
              onChange={handleMaxPriceChange}
            />
          </div>
          <div className="mb-2 small fw-semibold text-secondary">
            Price: MWK{priceRange[0]} — MWK{priceRange[1]}
          </div>
        </div>
      </div>

      <div className="filter-section mb-4">
        <h3 className="h5 mb-3">Product Categories</h3>
        <ul className="list-unstyled small text-secondary">
          {categories.map(category => (
            <li key={category.id} className="d-flex align-items-center gap-2 mb-1">
              <input 
                type="checkbox" 
                id={`cat-${category.id}`} 
                className="form-check-input" 
                checked={selectedCategories.includes(category.id)}
                onChange={() => onCategoryToggle(category.id)}
              />
              <label htmlFor={`cat-${category.id}`} className="mb-0">
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section">
        <h3 className="h5 mb-3">Product Status</h3>
        <ul className="list-unstyled small text-secondary">
          <li className="d-flex align-items-center gap-2">
            <input 
              type="checkbox" 
              id="status-instock" 
              className="form-check-input" 
              checked={inStockOnly}
              onChange={onStockToggle}
            />
            <label htmlFor="status-instock" className="mb-0">In Stock Only</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShopFilters;