import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import CategorySidebar from '../components/layout/CategorySidebar';
import { useProducts } from '../contexts/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const { featuredProducts, categories, loading } = useProducts();

  // Create sections from featured products
  const newArrivals = [...featuredProducts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 8);

  const bestSellers = [...featuredProducts].sort((a, b) => 
    b.sales - a.sales
  ).slice(0, 8);

  // Mock testimonials (you can move this to context if needed)
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'Great quality fruits, will order again!',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'Fast delivery and fresh produce.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      comment: 'Excellent customer service and products.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  ];

  return (
    <main className="container my-4">
      <div className="row">
        <CategorySidebar categories={categories} />
        
        <section className="col-12 col-md-9">
          {/* Banner */}
          <div className="d-flex flex-column flex-md-row align-items-center bg-light rounded-3 p-4 mb-4">
            <div className="flex-grow-1">
              <h1 className="display-6 fw-bold text-dark lh-sm mb-2" style={{ maxWidth: '320px' }}>
                Fresh Fruits Delivered to Your Door
              </h1>
              <p className="text-secondary mb-3" style={{ maxWidth: '320px' }}>
                Farm-fresh quality guaranteed! Get seasonal fruits delivered with free shipping on orders over $25.
              </p>
              <Link to="/shop" className="btn btn-purple mb-2">Shop Fruits</Link>
              <div className="text-decoration-line-through text-secondary fs-5 fw-semibold">$37.98</div>
              <div className="text-purple fs-3 fw-bold">$27.98</div>
            </div>
            <div className="mt-3 mt-md-0 ms-md-4 flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Assorted fresh fruits" 
                width="240" 
                height="160" 
                className="img-fluid rounded" 
              />
            </div>
          </div>

          {/* New Arrivals */}
          <section className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fs-4 fw-bold mb-0">Seasonal Fruits</h2>
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
              <h2 className="fs-4 fw-bold mb-0">Featured Fruits</h2>
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
                featuredProducts.slice(0, 4).map(product => (
                  <div key={product.id} className="col-6 col-md-4 col-lg-3">
                    <ProductCard product={product} isNew={true} />
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Best Sellers */}
          <section className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fs-4 fw-bold mb-0">Customer Favorites</h2>
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
                    <ProductCard product={product} isNew={true} />
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Bottom Banner */}
          <div className="bg-yellow-light rounded-3 p-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <p className="fs-1 fw-bold text-yellow mb-0">Up to 30% off</p>
            <p className="text-secondary mb-0" style={{ maxWidth: '600px' }}>
              Summer fruit sale! Enjoy discounts on all seasonal fruits this week only.
            </p>
            <Link to="/shop?filter=sale" className="btn btn-warning fw-bold px-4 py-2">Shop Sale</Link>
          </div>

          {/* Testimonials */}
          <section className="mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fs-4 fw-bold mb-0">What Our Customers Say</h2>
              <Link to="/testimonials" className="text-decoration-none d-flex align-items-center gap-2">
                See All <FontAwesomeIcon icon={faArrowRight} size="xs" />
              </Link>
            </div>
            <div className="row g-3">
              {testimonials.slice(0, 3).map(testimonial => (
                <div key={testimonial.id} className="col-12 col-md-4 border rounded-3 p-3 d-flex gap-3 align-items-center bg-white">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} profile picture`} 
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
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default HomePage;