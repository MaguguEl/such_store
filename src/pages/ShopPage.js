import React from 'react';
import ShopFilters from '../components/shop/ShopFilters';
import ProductGrid from '../components/shop/ProductGrid';
import ShopBanner from '../components/shop/ShopBanner';
import mockData from '../data/mockData';

const ShopPage = () => {
  const { products, categories } = mockData.shop;

  return (
    <main className="container pb-5">
      <div className="small text-muted py-3 user-select-none">
        Homepage &gt; Fruits &amp; Related Products
      </div>

      <div className="row g-4">
        <aside className="col-12 col-md-3">
          <ShopFilters categories={[
            { id: 'fresh-fruits', name: 'Fresh Fruits' },
            { id: 'dried-fruits', name: 'Dried Fruits' },
            { id: 'fruit-products', name: 'Fruit Products' },
            { id: 'citrus-fruits', name: 'Citrus Fruits' },
            { id: 'tropical-fruits', name: 'Tropical Fruits' },
            { id: 'berries', name: 'Berries' }
          ]} />
        </aside>
        <section className="col-12 col-md-9">
          <ShopBanner 
            title="Fresh Fruits & Delicious Products"
            subtitle="Nature's sweetness delivered to your doorstep"
          />
          
          {/* Filters top */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-3 small text-muted user-select-none">
            <div className="mb-2 mb-sm-0">
              <button type="button" className="btn btn-link p-0 text-decoration-none text-primary d-inline-flex align-items-center gap-1">
                <i className="fas fa-times"></i> Clear filters
              </button>
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

          <ProductGrid products={products} />
        </section>
      </div>
    </main>
  );
};

export default ShopPage;