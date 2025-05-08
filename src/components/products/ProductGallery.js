import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="d-flex flex-column align-items-center gap-4">
      {/* Main Image - Increased size */}
      <div className="position-relative bg-light rounded-3 p-4" style={{ width: '450px', height: '450px' }}>
        <img 
          src={mainImage} 
          alt="Main product view" 
          className="img-fluid h-100 w-100 object-fit-contain" 
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
      
      {/* Thumbnail Gallery */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {images.map((img, index) => (
          <button 
            key={index} 
            className={`border rounded-2 p-2 bg-white ${mainImage === img ? 'border-primary border-2' : 'border-secondary'}`}
            onClick={() => setMainImage(img)}
            style={{ width: '80px', height: '80px' }}
            aria-label={`View image ${index + 1}`}
          >
            <img 
              src={img} 
              alt={`Thumbnail ${index + 1}`} 
              className="img-fluid h-100 w-100 object-fit-contain" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;