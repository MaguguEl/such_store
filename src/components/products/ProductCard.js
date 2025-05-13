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
        <div className="product-image-container" style={{
          width: '100%',
          height: '180px', // Increased from 120px
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.75rem' // Slightly increased
        }}>
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover' 
            }}
          />
        </div>

        <h3 className="product-title h5 mb-2 text-dark">{name}</h3> {/* Changed from h6 to h5 */}

        {oldPrice && (
          <p className="price-old mb-1 text-muted small text-decoration-line-through">
            ${Number(oldPrice).toFixed(2)}
          </p>
        )}

        <p className={`price-new ${isOrganic ? 'text-success' : 'text-primary'} fw-bold mb-3`}>
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