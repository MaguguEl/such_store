import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const RelatedProducts = ({ products }) => {
  return (
    <section className="related-products mb-5">
      <h2 className="h4 mb-4">You Might Also Like</h2>
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;