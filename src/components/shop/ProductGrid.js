import React from 'react';
import ProductCard from '../products/ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="row g-4"> 
      {products.map(product => (
        <div key={product.id} className="col-6 col-md-4 col-lg-3"> 
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;