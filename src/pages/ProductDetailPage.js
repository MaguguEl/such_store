import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import ProductGallery from '../components/products/ProductGallery';
import ProductInfo from '../components/products/ProductInfo';
import ProductTabs from '../components/products/ProductTabs';
import RelatedProducts from '../components/products/RelatedProducts';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, getProductsByCategory, loading } = useProducts();
  
  const product = id ? getProductById(id) : null;
  const relatedProducts = product ? getProductsByCategory(product.categoryId)
    .filter(p => p.id !== product.id)
    .slice(0, 4) : [];

  if (!id || (!loading && !product)) {
    navigate('/not-found');
    return null;
  }

  return (
    <main className="container my-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product?.name || 'Product'}
          </li>
        </ol>
      </nav>

      {product && (
        <>
          <div className="row mb-5">
            <div className="col-md-6">
              <ProductGallery images={product.images} />
            </div>
            <div className="col-md-6">
              <ProductInfo product={product} />
            </div>
          </div>

          <ProductTabs description={product.description} />
          
          {relatedProducts.length > 0 && (
            <RelatedProducts products={relatedProducts} />
          )}
        </>
      )}
    </main>
  );
};

export default ProductDetailPage;