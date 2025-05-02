import React from 'react';
import ShopFilters from '../components/shop/ShopFilters';
import ProductGrid from '../components/shop/ProductGrid';
import ShopBanner from '../components/shop/ShopBanner';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: "Video Potatoes Whole Fresh, 5lb Bag",
      price: 0.50,
      oldPrice: 0.88,
      discount: 15,
      image: "https://storage.googleapis.com/a1aa/image/db05b208-7b5f-4383-df36-694d1a2dc795.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 2,
      name: "Large Bagged Oranges",
      price: 0.89,
      oldPrice: 1.78,
      discount: 15,
      image: "https://storage.googleapis.com/a1aa/image/4f4296d3-1771-440b-7922-4cf3661a1f33.jpg",
      isOrganic: true,
      inStock: true
    },
    {
      id: 3,
      name: "Strawberries - 1lb",
      price: 1.50,
      oldPrice: 2.16,
      discount: 15,
      image: "https://storage.googleapis.com/a1aa/image/5e5f1249-ebbf-446d-dab6-b91dca6ef61f.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 4,
      name: "Simple Kitchen FD Sliced Strawberries - 1.08lb",
      price: 21.90,
      oldPrice: 24.00,
      discount: 11,
      image: "https://storage.googleapis.com/a1aa/image/728499b9-2c66-4bba-aae1-a30e680a10d1.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 5,
      name: "Peach - each",
      price: 0.75,
      oldPrice: 3.75,
      discount: 99,
      image: "https://storage.googleapis.com/a1aa/image/340c3e7d-4099-483a-bf61-fe0d09c9d83e.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 6,
      name: "Marketside Fresh Organic Bananas, Bunch",
      price: 0.89,
      oldPrice: 1.89,
      discount: 15,
      image: "https://storage.googleapis.com/a1aa/image/93a796d3-9281-47db-7b5b-7a188a2b84b8.jpg",
      isOrganic: true,
      inStock: true
    },
    {
      id: 7,
      name: "Large Garden Spinach & Herb Wrap Tortilla",
      price: 27.90,
      oldPrice: 32.90,
      discount: 0,
      image: "https://storage.googleapis.com/a1aa/image/befe5cbb-ed1d-4d8b-41c2-60471cfe71d9.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 8,
      name: "Hallmark Harvest Caramel Apple Soft Caramels",
      price: 19.37,
      oldPrice: 31.37,
      discount: 45,
      image: "https://storage.googleapis.com/a1aa/image/6d6e5670-f47d-4cc0-aca2-0ab58b7f2e89.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 9,
      name: "Fresh Purple Eggplant",
      price: 2.99,
      oldPrice: 3.96,
      discount: 0,
      image: "https://storage.googleapis.com/a1aa/image/8bd043d9-2bf5-485b-88dd-04e7adca883b.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 10,
      name: "Fresh Pomegranate, Each",
      price: 1.50,
      oldPrice: 2.88,
      discount: 15,
      image: "https://storage.googleapis.com/a1aa/image/a8298580-0659-4e1a-cc0f-b29ec46dbfb9.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 11,
      name: "Fresh Lemon, Each",
      price: 0.50,
      oldPrice: 0.99,
      discount: 15,
      image: "https://storage.googleapis.com/a1aa/image/87332c11-3231-4c3b-9a58-efb1c9c8f5e5.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 12,
      name: "Fresh Cauliflower, Each",
      price: 12.79,
      oldPrice: 14.79,
      discount: 15,
      image: "https://storage.googleapis.com/a1aa/image/1041a287-7992-46a3-4548-cf85e4ab50a5.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 13,
      name: "Fresh Broccoli Crowns, Each",
      price: 11.54,
      oldPrice: 17.88,
      discount: 15,
      image: "https://storage.googleapis.com/a1aa/image/b3461ff9-f4cd-43d8-40e2-25e85710960b.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 14,
      name: "Blackberries - 6oz",
      price: 2.99,
      oldPrice: 4.99,
      discount: 40,
      image: "https://storage.googleapis.com/a1aa/image/d54c3256-318e-40f9-35a8-bf1deaadf743.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 15,
      name: "30g Protein Shake - Salted Caramel - 11 oz - 4pk",
      price: 11.99,
      oldPrice: 12.00,
      discount: 0,
      image: "https://storage.googleapis.com/a1aa/image/5303d6fc-7b37-40d4-9c04-c4c1c974ee11.jpg",
      isOrganic: false,
      inStock: true
    },
    {
      id: 16,
      name: "Fresh Granny Smith Apple, Each",
      price: 9.88,
      oldPrice: 15.99,
      discount: 17,
      image: "https://storage.googleapis.com/a1aa/image/80e72066-a2c9-40be-515a-bd309cb67665.jpg",
      isOrganic: true,
      inStock: true
    }
  ];

  return (
    <main className="container pb-5">
      <div className="small text-muted py-3 user-select-none">
        Homepage &gt; Shop
      </div>

      <div className="row g-4">
        <aside className="col-12 col-md-3">
          <ShopFilters />
        </aside>
        <section className="col-12 col-md-9">
          <ShopBanner />
          
          {/* Filters top */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-3 small text-muted user-select-none">
            <div className="mb-2 mb-sm-0">
              <button type="button" className="btn btn-link p-0 text-decoration-none text-primary d-inline-flex align-items-center gap-1">
                <i className="fas fa-times"></i> Clear filters
              </button>
              <span className="ms-2">› Fruits &amp; Vegetables</span>
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
                  <option>20 items</option>
                  <option>40 items</option>
                  <option>60 items</option>
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