import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../components/products/ProductGallery';
import ProductInfo from '../components/products/ProductInfo';
import ProductTabs from '../components/products/ProductTabs';
import RelatedProducts from '../components/products/RelatedProducts';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch product data based on the ID
  const product = {
    id: id,
    name: "Marketside Fresh Organic Bananas, Bunch",
    price: 0.89,
    oldPrice: 1.99,
    rating: 3,
    sku: "E7W6QH40",
    description: "Vivamus adipiscing elit ut dolor dignissim semper. Nulla luctus malesuada tincidunt...",
    images: [
      "https://storage.googleapis.com/a1aa/image/fc127333-2115-4a92-32f5-54a9ec6fdb33.jpg",
      "https://storage.googleapis.com/a1aa/image/b6bc8da0-c6ea-4ea0-0b83-1a3478efbb26.jpg",
      "https://storage.googleapis.com/a1aa/image/2eb77d40-f1f2-4af6-f9b5-7992eefa901b.jpg",
      "https://storage.googleapis.com/a1aa/image/4eb7571b-b591-4686-f204-22814da41894.jpg"
    ],
    isNew: true,
    isOrganic: true
  };

  const relatedProducts = [
    // Array of related products
  ];

  return (
    <main className="container my-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/shop">Fruits & Vegetables</a></li>
          <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="row">
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