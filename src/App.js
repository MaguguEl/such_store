import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShopPage from './pages/ShopPage';
import MainNavigation from './components/layout/MainNavigation';
import Footer from './components/layout/Footer';
import './styles/global.css';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
// import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import OrderTrackingPage from './pages/OrderTrackingPage';

import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext'; 

function App() {
  return (
    <ProductProvider> 
      <WishlistProvider>
        <CartProvider>
          <Router>
            <div className="bg-white text-dark">
              <MainNavigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
                <Route path="/order-tracking" element={<OrderTrackingPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>
  );
}

export default App;
