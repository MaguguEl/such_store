import React from 'react';
import ShopFilters from '../components/shop/ShopFilter';
import ProductGrid from '../components/shop/ProductGrid';
import ShopBanner from '../components/shop/ShopBanner';

const ShopPage = () => {
  const products = [
    // Array of products for the shop
  ];

  return (
    <main className="container pb-5">
      {/* Breadcrumb */}
      <div className="py-3">
        Homepage &gt; Shop
      </div>

      <div className="row g-4">
        <aside className="col-md-3">
          <ShopFilters />
        </aside>
        <section className="col-md-9">
          <ShopBanner />
          <ProductGrid products={products} />
        </section>
      </div>
    </main>
  );
};

export default ShopPage;