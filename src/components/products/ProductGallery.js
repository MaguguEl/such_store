import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <motion.div 
        className="main-image mb-3 rounded-3 bg-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={selectedImage}
        transition={{ duration: 0.3 }}
      >
        <img
          src={images[selectedImage]}
          alt="Main product view"
          className="img-fluid w-100"
          style={{ maxHeight: '500px', objectFit: 'contain' }}
        />
      </motion.div>

      {/* Thumbnails */}
      <div className="thumbnail-container d-flex gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            className={`thumbnail-btn p-0 border rounded-2 ${selectedImage === index ? 'border-primary border-2' : 'border-light'}`}
            onClick={() => setSelectedImage(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="img-fluid"
              style={{ height: '80px', width: '80px', objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;