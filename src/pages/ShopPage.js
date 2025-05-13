import React from 'react';
import ShopFilters from '../components/shop/ShopFilters';
import ProductGrid from '../components/shop/ProductGrid';
import ShopBanner from '../components/shop/ShopBanner';

const ShopPage = () => {
  // Combined product data
  const products = [
    // Fresh Fruits
    {
      id: 1,
      name: "Organic Bananas",
      price: 1.29,
      oldPrice: 1.89,
      discount: 32,
      image: "https://storage.googleapis.com/a1aa/image/93a796d3-9281-47db-7b5b-7a188a2b84b8.jpg",
      isOrganic: true,
      category: "fresh-fruits",
      tags: ['featured']
    },
    {
      id: 2,
      name: "Juicy Strawberries",
      price: 2.99,
      oldPrice: 3.99,
      discount: 25,
      image: "https://storage.googleapis.com/a1aa/image/5e5f1249-ebbf-446d-dab6-b91dca6ef61f.jpg",
      isOrganic: false,
      category: "fresh-fruits",
      tags: ['new']
    },
    {
      id: 3,
      name: "Sweet Pineapple",
      price: 3.49,
      oldPrice: 4.49,
      discount: 22,
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      isOrganic: false,
      category: "fresh-fruits",
      tags: ['new']
    },
    // Citrus Fruits
    {
      id: 11,
      name: "Navel Oranges",
      price: 6.99,
      oldPrice: 8.99,
      discount: 22,
      image: "https://storage.googleapis.com/a1aa/image/4f4296d3-1771-440b-7922-4cf3661a1f33.jpg",
      isOrganic: false,
      category: "citrus-fruits",
      tags: ['featured']
    },
    {
      id: 12,
      name: "Organic Lemons",
      price: 3.49,
      oldPrice: 3.99,
      discount: 13,
      image: "https://storage.googleapis.com/a1aa/image/87332c11-3231-4c3b-9a58-efb1c9c8f5e5.jpg",
      isOrganic: true,
      category: "citrus-fruits"
    },
    {
      id: 15,
      name: "Organic Blueberries",
      price: 3.99,
      oldPrice: 4.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      isOrganic: true,
      category: "berries",
      tags: ['best-seller']
    },
    {
      id: 17,
      name: "Tropical Mango",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "tropical-fruits",
      tags: ['new']
    },
    {
      id: 18,
      name: "Banana Bunch",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "fresh-fruits",
      tags: ['featured']
    },
    {
      id: 19,
      name: "Red Apples",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "fresh-fruits",
      tags: ['best-seller']
    },
  ];

  // Extract special collections
  const newArrivals = products.filter(product => product.tags?.includes('new'));
  const featuredProducts = products.filter(product => product.tags?.includes('featured'));
  const bestSellers = products.filter(product => product.tags?.includes('best-seller'));

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