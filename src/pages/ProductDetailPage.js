import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import ProductGallery from '../components/products/ProductGallery';
import ProductInfo from '../components/products/ProductInfo';
import ProductTabs from '../components/products/ProductTabs';
import RelatedProducts from '../components/products/RelatedProducts';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, getProductsByCategory, loading } = useProducts();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const product = id ? getProductById(id) : null;
  const relatedProducts = product ? getProductsByCategory(product.categoryId)
    .filter(p => p.id !== product.id)
    .slice(0, 4) : [];

  if (!id || (!loading && !product)) {
    navigate('/not-found');
    return null;
  }

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
  };

  const handleWishlistToggle = () => {
    isInWishlist(product.id)
      ? removeFromWishlist(product.id)
      : addToWishlist(product);
  };

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
            <div className="col-lg-6">
              <ProductGallery images={product.images} />
            </div>
            <div className="col-lg-6">
              <ProductInfo 
                product={product} 
                onAddToCart={handleAddToCart}
                onWishlistToggle={handleWishlistToggle}
                isInWishlist={isInWishlist(product.id)}
              />
            </div>
          </div>

          <ProductTabs 
            description={product.description} 
            specifications={product.specifications}
            reviews={product.reviews}
          />
          
          {relatedProducts.length > 0 && (
            <RelatedProducts products={relatedProducts} />
          )}
        </>
      )}
    </main>
  );
};

export default ProductDetailPage;