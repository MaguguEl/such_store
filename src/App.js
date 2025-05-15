import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShopPage from './pages/ShopPage';
import MainNavigation from './components/layout/MainNavigation';
import Footer from './components/layout/Footer';
import './styles/global.css';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import SafetyGuidePage from './pages/SafetyGuidePage';
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';

const DefaultLayout = ({ children }) => (
  <div className="bg-white text-dark">
    <MainNavigation />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <Routes>
              {/* Routes with navigation & footer */}
              <Route path="/" element={
                <DefaultLayout>
                  <HomePage />
                </DefaultLayout>
              } />
              <Route path="/product/:id" element={
                <DefaultLayout>
                  <ProductDetailPage />
                </DefaultLayout>
              } />
              <Route path="/shop" element={
                <DefaultLayout>
                  <ShopPage />
                </DefaultLayout>
              } />
              <Route path="/cart" element={
                <DefaultLayout>
                  <CartPage />
                </DefaultLayout>
              } />
              <Route path="/wishlist" element={
                <DefaultLayout>
                  <WishlistPage />
                </DefaultLayout>
              } />
              <Route path="/checkout" element={
                <DefaultLayout>
                  <CheckoutPage />
                </DefaultLayout>
              } />
              <Route path="/order-tracking" element={
                <DefaultLayout>
                  <OrderTrackingPage />
                </DefaultLayout>
              } />
              <Route path="/safety-guide" element={
                <DefaultLayout>
                  <SafetyGuidePage />
                </DefaultLayout>
              } />

              {/* 404 Page - Standalone (no layout) */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>
  );
}

export default App;