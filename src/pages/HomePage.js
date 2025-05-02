import React from 'react';
import ProductCard from '../components/products/ProductCard';
import CategorySidebar from '../components/layout/CategorySidebar';

const HomePage = () => {
  const newArrivals = [
    { id: 1, name: 'Orange Juice', price: '3.50', image: 'https://storage.googleapis.com/a1aa/image/5e453448-dbb2-41c4-b240-c9872cadc423.jpg' },
    { id: 2, name: 'Lemon Cleaner', price: '3.13', image: 'https://storage.googleapis.com/a1aa/image/b8fd5d7d-be8a-403e-383c-c04e9e138abe.jpg' },
    { id: 3, name: 'Cooking Oil', price: '2.46', image: 'https://storage.googleapis.com/a1aa/image/eda2484d-ef27-4388-759b-350c04819d4e.jpg' },
    { id: 4, name: 'Snack Pack', price: '7.77', image: 'https://storage.googleapis.com/a1aa/image/fecad9a1-e9f0-4c3c-bc2a-0d4377e1bb3c.jpg' },
    { id: 5, name: 'Melon', price: '1.99', image: 'https://storage.googleapis.com/a1aa/image/5ae844ae-d139-4ec4-aaea-2bf001e99c1e.jpg' },
    { id: 6, name: 'Baby Food', price: '3.49', image: 'https://storage.googleapis.com/a1aa/image/163755ef-f3e4-4200-fd49-2c2a2fabba14.jpg' }
  ];

  const featuredProducts = [
    { id: 7, name: 'Bananas', price: '2.99', image: 'https://storage.googleapis.com/a1aa/image/313efe8c-95c8-4948-118e-a030b31d5651.jpg' },
    { id: 8, name: 'Potato Chips', price: '7.99', image: 'https://storage.googleapis.com/a1aa/image/f25c4dc4-ae70-4378-da67-f3d90c02b63f.jpg' },
    { id: 9, name: 'Frozen Pizza', price: '5.99', image: 'https://storage.googleapis.com/a1aa/image/28a4a512-c2e4-41f7-a325-c1b3d6f3cf98.jpg' },
    { id: 10, name: 'Red Meat', price: '7.79', image: 'https://storage.googleapis.com/a1aa/image/6fab6716-3ea2-468f-49c7-4e53380e7fb5.jpg' },
    { id: 11, name: 'Liquid Detergent', price: '5.99', image: 'https://storage.googleapis.com/a1aa/image/2c6eb394-4f65-4739-ca02-7a17ce195e4e.jpg' },
    { id: 12, name: 'Sausage', price: '7.99', image: 'https://storage.googleapis.com/a1aa/image/d72de055-d7b7-4b53-a23c-bea7dc6c12af.jpg' }
  ];

  const bestSellers = [
    { id: 13, name: 'Yogurt', price: '3.00', image: 'https://storage.googleapis.com/a1aa/image/2e38009c-ba97-4ca0-2742-05601ed7e41e.jpg' },
    { id: 14, name: 'Melon', price: '1.21', image: 'https://storage.googleapis.com/a1aa/image/5ae844ae-d139-4ec4-aaea-2bf001e99c1e.jpg' },
    { id: 15, name: 'Maple Syrup', price: '2.99', image: 'https://storage.googleapis.com/a1aa/image/1385873d-09ac-4574-425f-4dea79ba3eca.jpg' },
    { id: 16, name: 'Coffee Beans', price: '11.99', image: 'https://storage.googleapis.com/a1aa/image/f4dfd426-74bf-44b8-c427-ee4da3f1be4a.jpg' },
    { id: 17, name: 'Raisin', price: '7.77', image: 'https://storage.googleapis.com/a1aa/image/8db8483e-2c27-4aa3-ab7b-fa324053281a.jpg' },
    { id: 18, name: 'Spices', price: '2.99', image: 'https://storage.googleapis.com/a1aa/image/d6268b5c-d5e7-498d-db3f-cda131e3fcba.jpg' },
    { id: 19, name: 'Honey', price: '7.75', image: 'https://storage.googleapis.com/a1aa/image/7c06b403-9d68-4929-24af-08db0f14eb1c.jpg' }
  ];

  const testimonials = [
    { id: 1, name: 'Customer', comment: '"Great quality and fast delivery!"', image: 'https://storage.googleapis.com/a1aa/image/79f99c04-724f-4a68-c043-4b8840e1ae2d.jpg' },
    { id: 2, name: 'Maria', comment: '"Affordable prices and excellent service."', image: 'https://storage.googleapis.com/a1aa/image/f3c07db5-a2a9-4150-79eb-7b0685d550b6.jpg' },
    { id: 3, name: 'Melissa', comment: '"I love shopping here, always fresh products."', image: 'https://storage.googleapis.com/a1aa/image/55fa66d5-4299-4a58-c6cd-38044ae7d6b7.jpg' }
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
                Get the best quality products at the lowest prices
              </h1>
              <p className="text-secondary mb-3" style={{ maxWidth: '320px' }}>
                Freshness guaranteed! Get your groceries delivered to your doorstep with ease and convenience.
              </p>
              <button className="btn btn-purple mb-2">Shop Now</button>
              <div className="text-decoration-line-through text-secondary fs-5 fw-semibold">$37.98</div>
              <div className="text-purple fs-3 fw-bold">$27.98</div>
            </div>
            <div className="mt-3 mt-md-0 ms-md-4 flex-shrink-0">
              <img 
                src="https://storage.googleapis.com/a1aa/image/a8a2f31a-49f4-41a9-8a03-d6c4a0d8e23e.jpg" 
                alt="Two bags of lentils and beans packaging on white background" 
                width="240" 
                height="160" 
                className="img-fluid" 
              />
            </div>
          </div>

          {/* Features */}
          <div className="row text-center text-secondary fw-semibold mb-4">
            {/* Feature items would go here */}
          </div>

          {/* Main Articles */}
          <div className="row g-3 mb-4">
            {/* Article cards would go here */}
          </div>

          {/* New Arrivals */}
          <section className="mb-5">
            <h2 className="fs-4 fw-bold mb-3">New Arrivals</h2>
            <div className="row g-3">
              {newArrivals.map(product => (
                <div key={product.id} className="col-6 col-sm-4 col-md-2">
                  <ProductCard product={product} isNew={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Info Cards */}
          <div className="row g-3 mb-5">
            {/* Info cards would go here */}
          </div>

          {/* Featured Products */}
          <section className="mb-5">
            <h2 className="fs-4 fw-bold mb-3">Featured Products</h2>
            <div className="row g-3">
              {featuredProducts.map(product => (
                <div key={product.id} className="col-6 col-sm-4 col-md-2">
                  <ProductCard product={product} isNew={true} />
                </div>
              ))}
            </div>
          </section>

          {/* Promo Banners */}
          <div className="row g-3 mb-5">
            {/* Promo banners would go here */}
          </div>

          {/* Best Sellers */}
          <section className="mb-5">
            <h2 className="fs-4 fw-bold mb-3">Best Sellers</h2>
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
            <p className="fs-1 fw-bold text-yellow mb-0">Up to 50% off</p>
            <p className="text-secondary mb-0" style={{ maxWidth: '600px' }}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <button className="btn btn-warning fw-bold px-4 py-2">Shop Now</button>
          </div>

          {/* Testimonials */}
          <section className="mt-5">
            <h2 className="fs-4 fw-bold mb-3">Product Reviews</h2>
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