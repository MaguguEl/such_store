import React from 'react';
import ProductCard from '../components/products/ProductCard';
import CategorySidebar from '../components/layout/CategorySidebar';

const HomePage = () => {
  const newArrivals = [
    { id: 1, name: 'Organic Strawberries', price: '4.99', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', isOrganic: true },
    { id: 2, name: 'Tropical Mango', price: '2.49', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Seedless Grapes', price: '3.99', image: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Pineapple', price: '3.29', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'Organic Blueberries', price: '5.49', image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80', isOrganic: true },
    { id: 6, name: 'Fresh Coconut', price: '2.99', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
  ];

  const featuredProducts = [
    { id: 7, name: 'Banana Bunch', price: '1.99', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 8, name: 'Red Apples', price: '2.49', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 9, name: 'Kiwi Fruit', price: '3.99', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 10, name: 'Avocado', price: '1.79', image: 'https://images.unsplash.com/photo-1594282486555-52a79914727e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 11, name: 'Fresh Figs', price: '6.99', image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 12, name: 'Pomegranate', price: '3.49', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
  ];

  const bestSellers = [
    { id: 13, name: 'Watermelon', price: '4.99', image: 'https://images.unsplash.com/photo-1563114775-4ddca575f05f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 14, name: 'Cantaloupe', price: '3.49', image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 15, name: 'Peach', price: '2.99', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 16, name: 'Plums', price: '3.29', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 17, name: 'Cherries', price: '6.99', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
    { id: 18, name: 'Green Grapes', price: '3.99', image: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
  ];

  const testimonials = [
    { id: 1, name: 'Sarah J.', comment: '"The freshest fruits I\'ve ever ordered online!"', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 2, name: 'Michael T.', comment: '"Perfect ripeness every time. My family loves it!"', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 3, name: 'Emma K.', comment: '"Organic selection is amazing. Worth every penny!"', image: 'https://randomuser.me/api/portraits/women/63.jpg' }
  ];

  return (
    <main className="container my-4">
      <div className="row">
        <CategorySidebar />
        
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
              <button className="btn btn-purple mb-2">Shop Fruits</button>
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
            <h2 className="fs-4 fw-bold mb-3">Seasonal Fruits</h2>
            <div className="row g-3">
              {newArrivals.map(product => (
                <div key={product.id} className="col-6 col-sm-4 col-md-2">
                  <ProductCard product={product} isNew={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section className="mb-5">
            <h2 className="fs-4 fw-bold mb-3">Featured Fruits</h2>
            <div className="row g-3">
              {featuredProducts.map(product => (
                <div key={product.id} className="col-6 col-sm-4 col-md-2">
                  <ProductCard product={product} isNew={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Best Sellers */}
          <section className="mb-5">
            <h2 className="fs-4 fw-bold mb-3">Customer Favorites</h2>
            <div className="row g-3">
              {bestSellers.map(product => (
                <div key={product.id} className="col-6 col-sm-4 col-md-2">
                  <ProductCard product={product} isNew={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Banner */}
          <div className="bg-yellow-light rounded-3 p-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <p className="fs-1 fw-bold text-yellow mb-0">Up to 30% off</p>
            <p className="text-secondary mb-0" style={{ maxWidth: '600px' }}>
              Summer fruit sale! Enjoy discounts on all seasonal fruits this week only. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <button className="btn btn-warning fw-bold px-4 py-2">Shop Sale</button>
          </div>

          {/* Testimonials */}
          <section className="mt-5">
            <h2 className="fs-4 fw-bold mb-3">What Our Customers Say</h2>
            <div className="row g-3">
              {testimonials.map(testimonial => (
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