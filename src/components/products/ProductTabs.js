import React, { useState } from 'react';

const ProductTabs = ({ description, specifications = [], reviews = [] }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="card mb-5">
      <div className="card-header bg-white border-bottom-0">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({reviews.length})
            </button>
          </li>
        </ul>
      </div>
      <div className="card-body">
        {activeTab === 'description' && (
          <div className="product-description">
            <p>{description}</p>
          </div>
        )}
        
        {activeTab === 'specifications' && (
          <div className="product-specifications">
            {specifications.length > 0 ? (
              <ul className="list-unstyled">
                {specifications.map((spec, index) => (
                  <li key={index} className="mb-2">
                    <strong>{spec.name}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No specifications available.</p>
            )}
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div className="product-reviews">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="mb-4 pb-4 border-bottom">
                  <div className="d-flex justify-content-between mb-2">
                    <strong>{review.author}</strong>
                    <small className="text-muted">{review.date}</small>
                  </div>
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'text-warning' : 'text-muted'}>★</span>
                    ))}
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet. Be the first to review!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;