import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <div className="position-relative" style={{ width: '320px', height: '320px' }}>
        <img 
          src={mainImage} 
          alt="Main product view" 
          className="img-fluid h-100 w-100 object-fit-contain" 
        />
      </div>
      <div className="d-flex gap-3">
        {images.map((img, index) => (
          <button 
            key={index} 
            className={`border rounded p-1 ${mainImage === img ? 'border-primary' : ''}`}
            onClick={() => setMainImage(img)}
          >
            <img 
              src={img} 
              alt={`Thumbnail ${index + 1}`} 
              width="48" 
              height="48" 
              className="img-fluid object-fit-contain" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;