import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faShoppingBag,
    faClock,
    faUserCircle,
    faHeart,
    faShoppingCart,
    faFire,
    faGasPump,
    faTools,
    faShieldAlt,
    faIndustry,
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const MobileMenu = ({ isOpen, toggleMenu }) => {
    const { cartItems } = useCart();
    const { wishlistItems } = useWishlist();

    if (!isOpen) return null;

    return (
        <div className="d-md-none fixed-top bg-white shadow vh-100 overflow-auto" style={{ zIndex: 1050 }}>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                <h5 className="m-0 fw-bold">Menu</h5>
                <button onClick={toggleMenu} className="btn btn-close"></button>
            </div>
            <div className="p-3">
                <ul className="list-unstyled m-0">
                    <li className="mb-2">
                        <Link to="/" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faHome} className="me-3" />
                            <span className="fs-6">Home</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/shop" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faShoppingBag} className="me-3" />
                            <span className="fs-6">Shop All</span>
                        </Link>
                    </li>
                    <li className="mt-4 mb-2">
                        <h6 className="text-muted fw-semibold mb-2">Categories</h6>
                        <ul className="list-unstyled ps-3">
                            <li className="mb-2">
                                <Link to="/shop?category=regulators" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faTools} className="me-3" />
                                    <span className="fs-6">Gas Regulators</span>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/shop?category=hoses" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faGasPump} className="me-3" />
                                    <span className="fs-6">Gas Hoses & Tubings</span>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/shop?category=valves" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faShieldAlt} className="me-3" />
                                    <span className="fs-6">Gas Valves</span>
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/shop?category=burners" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faFire} className="me-3" />
                                    <span className="fs-6">Gas Burners & Nozzles</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop?category=industrial" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faIndustry} className="me-3" />
                                    <span className="fs-6">Industrial Gas Equipment</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="mt-4 mb-2">
                        <h6 className="text-muted fw-semibold mb-2">My Account</h6>
                        <ul className="list-unstyled ps-3">
                            <li className="mb-2 position-relative">
                                <Link to="/wishlist" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faHeart} className="me-3" />
                                    <span className="fs-6">Wishlist</span>
                                    {wishlistItems.length > 0 && (
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ms-1"
                                            style={{ fontSize: '0.6rem' }}
                                        >
                                            {wishlistItems.length}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            <li className="mb-2 position-relative">
                                <Link to="/cart" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faShoppingCart} className="me-3" />
                                    <span className="fs-6">Cart</span>
                                    {cartItems.length > 0 && (
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary ms-1"
                                            style={{ fontSize: '0.6rem' }}
                                        >
                                            {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/order-tracking" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faClock} className="me-3" />
                                    <span className="fs-6">Order Tracking</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="nav-link d-flex align-items-center text-decoration-none text-dark" onClick={toggleMenu}>
                                    <FontAwesomeIcon icon={faUserCircle} className="me-3" />
                                    <span className="fs-6">Profile</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;