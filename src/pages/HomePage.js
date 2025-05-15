import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { useProducts } from '../contexts/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const { featuredProducts, loading } = useProducts();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // New Arrivals - sorted by creation date (newest first)
  const newArrivals = [...featuredProducts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 8);

  // Best Sellers - sorted by sales (highest first)
  const bestSellers = [...featuredProducts].sort((a, b) => 
    b.sales - a.sales
  ).slice(0, 8);

  // Featured Products - filtered by featured flag
  const featured = featuredProducts.filter(product => product.featured).slice(0, 8);

  // Get industrial products for banner carousel
  const industrialProducts = featuredProducts.filter(product => product.isIndustrial).slice(0, 3);
  
  // If no industrial products, use first 3 featured products
  const bannerProducts = industrialProducts.length > 0 
    ? industrialProducts 
    : featuredProducts.slice(0, 3);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % bannerProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerProducts.length]);

  // // Helper function to get unique products for each section
  // const getUniqueProducts = () => {
  //   const usedProductIds = new Set();
    
  //   // New Arrivals - sorted by creation date (newest first)
  //   const newArrivals = [...featuredProducts]
  //     .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  //     .filter(product => !usedProductIds.has(product.id))
  //     .slice(0, 8);
    
  //   newArrivals.forEach(product => usedProductIds.add(product.id));

  //   // Best Sellers - sorted by sales (highest first)
  //   const bestSellers = [...featuredProducts]
  //     .sort((a, b) => b.sales - a.sales)
  //     .filter(product => !usedProductIds.has(product.id))
  //     .slice(0, 8);
    
  //   bestSellers.forEach(product => usedProductIds.add(product.id));

  //   // Featured Products - filtered by featured flag
  //   const featured = featuredProducts
  //     .filter(product => product.featured && !usedProductIds.has(product.id))
  //     .slice(0, 8);

  //   return { newArrivals, bestSellers, featured };
  // };

  // const { newArrivals, bestSellers, featured } = getUniqueProducts();

  // // Get industrial products for banner carousel
  // const industrialProducts = featuredProducts.filter(product => product.isIndustrial).slice(0, 3);
  
  // // If no industrial products, use first 3 featured products
  // const bannerProducts = industrialProducts.length > 0 
  //   ? industrialProducts 
  //   : featuredProducts.slice(0, 3);

  // // Auto-rotate carousel every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBannerIndex(prev => (prev + 1) % bannerProducts.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [bannerProducts.length]);

  const nextBanner = () => {
    setCurrentBannerIndex(prev => (prev + 1) % bannerProducts.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex(prev => (prev - 1 + bannerProducts.length) % bannerProducts.length);
  };

  const currentBannerProduct = bannerProducts[currentBannerIndex] || {};

  // Gas-related testimonials
  const testimonials = [
    {
      id: 1,
      name: 'James Wilson',
      comment: 'The high-pressure regulator works perfectly in our factory!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      comment: 'Fast shipping and excellent quality gas accessories.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Mike Chen',
      comment: 'Reliable industrial gas equipment at competitive prices.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  return (
    <main className="container my-4">
      <div className="row">
        <section className="col-12">
          {/* Main Banner Carousel - Showcases industrial products */}
          <div className="position-relative bg-light rounded-3 p-4 mb-5 overflow-hidden">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div className="flex-grow-1">
                <h1 className="display-6 fw-bold text-dark lh-sm mb-2" style={{ maxWidth: '320px' }}>
                  Premium Gas Equipment & Accessories
                </h1>
                <p className="text-secondary mb-3" style={{ maxWidth: '320px' }}>
                  Industrial-grade solutions with free shipping on orders over $200.
                </p>
                <Link to="/shop" className="btn btn-danger mb-2">Shop Now</Link>
                {currentBannerProduct?.oldPrice && (
                  <div className="text-decoration-line-through text-secondary fs-5 fw-semibold">
                    ${currentBannerProduct.oldPrice.toFixed(2)}
                  </div>
                )}
                <div className="text-danger fs-3 fw-bold">
                  ${currentBannerProduct?.price?.toFixed(2) || '49.99'}
                </div>
              </div>
              <div className="mt-3 mt-md-0 ms-md-4 flex-shrink-0">
                <img 
                  src={currentBannerProduct?.images?.[0] || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"} 
                  alt={currentBannerProduct?.name || "Industrial gas equipment"} 
                  width="240" 
                  height="160" 
                  className="img-fluid rounded" 
                />
              </div>
            </div>

            {/* Carousel Controls */}
            {bannerProducts.length > 1 && (
              <>
                <button 
                  onClick={prevBanner}
                  className="position-absolute start-0 top-50 translate-middle-y btn btn-sm btn-light rounded-circle p-2 ms-3"
                  style={{ width: '40px', height: '40px' }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button 
                  onClick={nextBanner}
                  className="position-absolute end-0 top-50 translate-middle-y btn btn-sm btn-light rounded-circle p-2 me-3"
                  style={{ width: '40px', height: '40px' }}
                >
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>

                {/* Carousel Indicators */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
                  {bannerProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBannerIndex(index)}
                      className={`btn btn-sm rounded-circle p-0 ${index === currentBannerIndex ? 'bg-primary' : 'bg-secondary bg-opacity-25'}`}
                      style={{ width: '10px', height: '10px' }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* New Arrivals */}
          <section className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fs-4 fw-bold mb-0">New Arrivals</h2>
              <Link to="/shop?filter=new" className="text-decoration-none d-flex align-items-center gap-2">
                See All <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </Link>
            </div>
            <div className="row g-4">
              {loading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3">
                    <div className="card h-100 placeholder-glow">
                      <div className="card-img-top placeholder" style={{ height: '200px' }} />
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                newArrivals.slice(0, 4).map(product => (
                  <div key={product.id} className="col-6 col-md-4 col-lg-3">
                    <ProductCard product={product} isNew={true} />
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Featured Products */}
          <section className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fs-4 fw-bold mb-0">Featured Products</h2>
              <Link to="/shop?filter=featured" className="text-decoration-none d-flex align-items-center gap-2">
                See All <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </Link>
            </div>
            <div className="row g-4">
              {loading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3">
                    <div className="card h-100 placeholder-glow">
                      <div className="card-img-top placeholder" style={{ height: '200px' }} />
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                featured.slice(0, 4).map(product => (
                  <div key={product.id} className="col-6 col-md-4 col-lg-3">
                    <ProductCard product={product} />
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Best Sellers */}
          <section className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fs-4 fw-bold mb-0">Best Sellers</h2>
              <Link to="/shop?filter=bestsellers" className="text-decoration-none d-flex align-items-center gap-2">
                See All <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </Link>
            </div>
            <div className="row g-4">
              {loading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3">
                    <div className="card h-100 placeholder-glow">
                      <div className="card-img-top placeholder" style={{ height: '200px' }} />
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7"></span>
                          <span className="placeholder col-4"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                bestSellers.slice(0, 4).map(product => (
                  <div key={product.id} className="col-6 col-md-4 col-lg-3">
                    <ProductCard product={product} />
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Safety Promotion Banner */}
          <div className="bg-warning bg-opacity-10 rounded-3 p-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 mb-5">
            <div className="text-warning">
              <p className="fs-1 fw-bold mb-0">Safety First</p>
              <p className="mb-0">All gas products meet industry safety standards</p>
            </div>
            <Link to="/safety" className="btn btn-warning fw-bold px-4 py-2">
              Learn Safety Tips
            </Link>
          </div>

          {/* Testimonials */}
          <section className="mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fs-4 fw-bold mb-0">What Our Customers Say</h2>
              <Link to="/testimonials" className="text-decoration-none d-flex align-items-center gap-2">
                See All <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </Link>
            </div>
            
            <div className="row g-4">  
              {testimonials.map(testimonial => (
                <div 
                  key={testimonial.id} 
                  className="col-12 col-md-6 col-lg-4" 
                >
                  <div className="border rounded-3 p-3 d-flex gap-3 align-items-center bg-white h-100">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="rounded-circle" 
                      width="64" 
                      height="64" 
                      style={{ objectFit: 'cover' }} 
                    />
                    <div>
                      <p className="fw-semibold mb-1">{testimonial.name}</p>
                      <p className="text-secondary small mb-0">{testimonial.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default HomePage;