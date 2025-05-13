import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import ShopFilters from '../components/shop/ShopFilters';
import ProductGrid from '../components/shop/ProductGrid';
import ShopBanner from '../components/shop/ShopBanner';

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const { products, categories, loading } = useProducts();

  // Get filter from URL
  const filter = searchParams.get('filter');
  let filteredProducts = [...products];

  // Apply filters
  if (filter === 'new') {
    filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (filter === 'featured') {
    filteredProducts = filteredProducts.filter(p => p.featured);
  } else if (filter === 'bestsellers') {
    filteredProducts.sort((a, b) => b.sales - a.sales);
  } else if (filter === 'sale') {
    filteredProducts = filteredProducts.filter(p => p.discount > 0);
  }

  return (
    <main className="container pb-5">
      <div className="small text-muted py-3 user-select-none">
        <Link to="/">Homepage</Link> &gt; Fruits &amp; Related Products
      </div>

      <div className="row g-4">
        <aside className="col-12 col-md-3">
          <ShopFilters categories={categories} />
        </aside>
        <section className="col-12 col-md-9">
          <ShopBanner 
            title="Fresh Fruits & Delicious Products"
            subtitle="Nature's sweetness delivered to your doorstep"
          />
          
          {/* Filters top */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-3 small text-muted user-select-none">
            <div className="mb-2 mb-sm-0">
              <Link to="/shop" className="btn btn-link p-0 text-decoration-none text-primary d-inline-flex align-items-center gap-1">
                <i className="fas fa-times"></i> Clear filters
              </Link>
              <span className="ms-2">› All Fruits</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div>
                <label htmlFor="sort" className="me-1">Sort:</label>
                <select id="sort" className="form-select form-select-sm d-inline-block w-auto">
                  <option>Sort by latest</option>
                  <option>Sort by price</option>
                  <option>Sort by popularity</option>
                </select>
              </div>
              <div>
                <label htmlFor="show" className="me-1">Show:</label>
                <select id="show" className="form-select form-select-sm d-inline-block w-auto">
                  <option>16 items</option>
                  <option>32 items</option>
                  <option>All items</option>
                </select>
              </div>
              <button type="button" className="btn btn-outline-secondary btn-sm" aria-label="Grid view">
                <i className="fas fa-th-large"></i>
              </button>
            </div>
          </div>

          <ProductGrid products={filteredProducts} loading={loading} />
        </section>
      </div>
    </main>
  );
};

export default ShopPage;