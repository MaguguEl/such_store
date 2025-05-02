import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    id,
    name,
    image,
    price,
    oldPrice,
    discount,
    isOrganic
  } = product;

  return (
    <article className="product-card position-relative">
      {discount > 0 && (
        <div className="sale-badge position-absolute top-0 end-0 bg-danger text-white small px-2 py-1">
          {discount === 99 ? 'NEW' : `${discount}%`}
        </div>
      )}

      <button className="wishlist-btn position-absolute top-0 start-0 bg-transparent border-0">
        <FontAwesomeIcon icon={['far', 'heart']} />
      </button>

      <Link to={`/product/${id}`} className="text-decoration-none">
        <img
          src={image}
          alt={name}
          className="img-fluid w-100 mb-2"
        />

        <h3 className="product-title h6 mb-1 text-dark">{name}</h3>

        {oldPrice && (
          <p className="price-old mb-0 text-muted small text-decoration-line-through">
            ${Number(oldPrice).toFixed(2)}
          </p>
        )}

        <p className={`price-new ${isOrganic ? 'text-success' : 'text-primary'} fw-bold`}>
          ${Number(price).toFixed(2)}
        </p>
      </Link>

      <button className="btn-cart w-100 btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center gap-1">
        <FontAwesomeIcon icon="shopping-cart" /> Add To Cart
      </button>
    </article>
  );
};

export default ProductCard;