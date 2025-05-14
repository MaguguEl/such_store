import React from 'react';
import ProductListCard from '../products/ProductListCard';


const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-5">
        <h4>No products found</h4>
        <p className="text-muted">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {products.map(product => (
        <div key={product.id} className="col-12">
          <ProductListCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;