import React from 'react';
import ProductCard from './ProductCard';

const RelatedProducts = ({ products }) => {
  return (
    <section className="mt-5">
      <h2 className="fs-4 fw-bold mb-3">Related Products</h2>
      <div className="row g-3">
        {products.map(product => (
          <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;