import React, { createContext, useState, useContext, useEffect } from 'react';
import { mockProducts, mockCategories } from '../data/mockData';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulated fetch - replace with real API calls if needed
      setProducts(mockProducts);
      setCategories(mockCategories);
      setFeaturedProducts(mockProducts.filter(product => product.featured));
      setLoading(false);
    } catch (err) {
      setError('Failed to load products');
      setLoading(false);
    }
  }, []);

  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (categoryId) => {
    return products.filter(product => product.categoryId === categoryId);
  };

  const searchProducts = (query) => {
    if (!query.trim()) return products;

    const searchTerm = query.toLowerCase().trim();
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  };

  const filterProducts = (filters) => {
    return products.filter(product => {
      let match = true;

      if (filters.category && filters.category !== 'all') {
        match = match && product.categoryId === filters.category;
      }

      if (filters.minPrice !== undefined) {
        match = match && product.price >= filters.minPrice;
      }

      if (filters.maxPrice !== undefined) {
        match = match && product.price <= filters.maxPrice;
      }

      if (filters.inStock !== undefined) {
        match = match && product.inStock === filters.inStock;
      }

      return match;
    });
  };

  const value = {
    products,
    categories,
    featuredProducts,
    loading,
    error,
    getProductById,
    getProductsByCategory,
    searchProducts,
    filterProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
