import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShopPage from './pages/ShopPage';
import HeaderTop from './components/layout/HeaderTop';
import MainNavigation from './components/layout/MainNavigation';
import Footer from './components/layout/Footer';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="bg-white text-dark">
        <HeaderTop />
        <MainNavigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;