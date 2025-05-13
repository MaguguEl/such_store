import React from 'react';
import { useProducts } from '../../contexts/ProductContext'; 

const ShopFilters = () => {
  const { categories } = useProducts(); 

  return (
    <>
      <div className="filter-section mb-4">
        <h3 className="h5 mb-3">Price Filter</h3>
        <form>
          <div className="mb-3 d-flex align-items-center gap-2 small fw-semibold text-secondary">
            <label htmlFor="minPrice" className="flex-shrink-0" style={{ width: '4rem' }}>Min price</label>
            <input type="number" id="minPrice" className="form-control form-control-sm" min="0" max="30" value="0" />
          </div>
          <div className="mb-3 d-flex align-items-center gap-2 small fw-semibold text-secondary">
            <label htmlFor="maxPrice" className="flex-shrink-0" style={{ width: '4rem' }}>Max price</label>
            <input type="number" id="maxPrice" className="form-control form-control-sm" min="0" max="30" value="30" />
          </div>
          <div className="mb-2 small fw-semibold text-secondary">Price: $0 — $30</div>
          <button type="submit" className="btn btn-sm btn-outline-secondary">Filter</button>
        </form>
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
              />
              <label htmlFor={`cat-${category.id}`} className="mb-0">
                {category.name} {/* Using category name from context */}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-section mb-4">
        <h3 className="h5 mb-3">Filter by Brands</h3>
        <ul className="list-unstyled small text-secondary">
          <li className="d-flex align-items-center gap-2">
            <input type="checkbox" id="brand-fresh" className="form-check-input" />
            <label htmlFor="brand-fresh" className="mb-0">Fresh</label>
            <span className="ms-auto">(1)</span>
          </li>
        </ul>
      </div>

      <div className="filter-section">
        <h3 className="h5 mb-3">Product Status</h3>
        <ul className="list-unstyled small text-secondary">
          <li className="d-flex align-items-center gap-2">
            <input type="checkbox" id="status-instock" className="form-check-input" />
            <label htmlFor="status-instock" className="mb-0">In Stock</label>
          </li>
          <li className="d-flex align-items-center gap-2">
            <input type="checkbox" id="status-onsale" className="form-check-input" />
            <label htmlFor="status-onsale" className="mb-0">On Sale</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShopFilters;
