import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductGallery from '../components/products/ProductGallery';
import ProductInfo from '../components/products/ProductInfo';
import ProductTabs from '../components/products/ProductTabs';
import RelatedProducts from '../components/products/RelatedProducts';
import mockData from '../data/mockData';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  const { product, relatedProducts } = mockData.getProductDetail(id);

  return (
    <main className="container my-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/shop">Fruits & Vegetables</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="row mb-5">
        <div className="col-md-6">
          <ProductGallery images={product.images} />
        </div>
        <div className="col-md-6">
          <ProductInfo product={product} />
        </div>
      </div>

      <ProductTabs description={product.description} />
      
      <RelatedProducts products={relatedProducts} />
    </main>
  );
};

export default ProductDetailPage;