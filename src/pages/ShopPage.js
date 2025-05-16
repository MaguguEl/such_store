// ShopPage.jsx
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import ShopFilters from '../components/shop/ShopFilters';
import ProductGrid from '../components/shop/ProductGrid';
import ProductList from '../components/shop/ProductList';
import ShopBanner from '../components/shop/ShopBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faThLarge, faList, faFilter } from '@fortawesome/free-solid-svg-icons';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, categories, loading } = useProducts();
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 1000000]); // Updated for MWK prices
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Get filter from URL
  const filter = searchParams.get('filter');
  const category = searchParams.get('category');
  let filteredProducts = [...products];

  // Apply URL filters
  if (filter === 'new') {
    filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (filter === 'featured') {
    filteredProducts = filteredProducts.filter(p => p.featured);
  } else if (filter === 'bestsellers') {
    filteredProducts.sort((a, b) => b.sales - a.sales);
  } else if (filter === 'sale') {
    filteredProducts = filteredProducts.filter(p => p.oldPrice && p.price < p.oldPrice);
  }

  // Apply category filter from URL
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.categoryId === category);
  }

  // Apply additional filters
  filteredProducts = filteredProducts.filter(product => {
    // Price filter (adjusted for MWK)
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.categoryId)) {
      return false;
    }
    
    // Stock filter
    if (inStockOnly && !product.inStock) {
      return false;
    }
    
    return true;
  });

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId) 
        : [...prev, categoryId]
    );
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([parseInt(min), parseInt(max)]);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000000]); // Reset to MWK range
    setInStockOnly(false);
    setSearchParams({});
  };

  // Calculate active filter count
  const activeFilterCount = [
    ...selectedCategories,
    priceRange[0] !== 0 || priceRange[1] !== 1000000 ? 1 : 0,
    inStockOnly ? 1 : 0,
    filter ? 1 : 0
  ].filter(Boolean).length;

  return (
    <main className="container pb-5">
      <div className="small text-muted py-3 user-select-none">
        <Link to="/">Homepage</Link> &gt; Gas Equipment &amp; Accessories
      </div>

      <div className="row g-4">
        {/* Mobile filter toggle */}
        <div className="d-md-none d-flex justify-content-between align-items-center mb-3">
          <button 
            className="btn btn-outline-primary"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <FontAwesomeIcon icon={faFilter} className="me-2" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
          <div className="btn-group" role="group">
            <button 
              type="button" 
              className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <FontAwesomeIcon icon={faThLarge} />
            </button>
            <button 
              type="button" 
              className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <FontAwesomeIcon icon={faList} />
            </button>
          </div>
        </div>

        {/* Filters sidebar - desktop */}
        <aside className={`col-md-3 d-none d-md-block ${mobileFiltersOpen ? 'd-block' : 'd-none'}`}>
          <ShopFilters 
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
            priceRange={priceRange}
            onPriceChange={handlePriceChange}
            inStockOnly={inStockOnly}
            onStockToggle={() => setInStockOnly(!inStockOnly)}
            maxPrice={1000000} // MWK max price
          />
        </aside>

        {/* Main content */}
        <section className="col-12 col-md-9">
          <ShopBanner />
          
          {/* Filters top */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-3 small text-muted user-select-none">
            <div className="mb-2 mb-sm-0">
              {activeFilterCount > 0 && (
                <button 
                  onClick={handleClearFilters}
                  className="btn btn-link p-0 text-decoration-none text-primary d-inline-flex align-items-center gap-1"
                >
                  <FontAwesomeIcon icon={faTimes} /> Clear all filters
                </button>
              )}
              {category && (
                <span className="ms-2">› {categories.find(c => c.id === category)?.name}</span>
              )}
            </div>
            <div className="d-flex align-items-center gap-3">
              <div>
                <label htmlFor="sort" className="me-1">Sort:</label>
                <select 
                  id="sort" 
                  className="form-select form-select-sm d-inline-block w-auto"
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchParams(prev => {
                      prev.set('filter', value);
                      return prev;
                    });
                  }}
                  value={filter || 'featured'}
                >
                  <option value="featured">Featured</option>
                  <option value="new">Newest</option>
                  <option value="bestsellers">Bestsellers</option>
                  <option value="sale">On Sale</option>
                </select>
              </div>
              <div className="btn-group d-none d-md-flex" role="group">
                <button 
                  type="button" 
                  className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <FontAwesomeIcon icon={faThLarge} />
                </button>
                <button 
                  type="button" 
                  className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="row g-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-3">
                  <div className="card placeholder-glow">
                    <div className="placeholder card-img-top" style={{ height: '180px' }} />
                    <div className="card-body">
                      <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                      </h5>
                      <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <div className="py-5">
                <h4 className="mb-3">No products match your search</h4>
                <p className="text-muted mb-4">
                  {activeFilterCount > 0 
                    ? "Try adjusting your filters or search criteria"
                    : "Our inventory is currently empty. Please check back later."}
                </p>
                {activeFilterCount > 0 && (
                  <button 
                    onClick={handleClearFilters}
                    className="btn btn-primary px-4"
                  >
                    Clear All Filters
                  </button>
                )}
                <div className="mt-4">
                  <Link to="/" className="btn btn-outline-primary">
                    Return to Homepage
                  </Link>
                </div>
              </div>
            </div>
          ) : viewMode === 'grid' ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <ProductList products={filteredProducts} />
          )}
        </section>
      </div>
    </main>
  );
};

export default ShopPage;