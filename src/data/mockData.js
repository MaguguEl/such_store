const mockData = {
  // Home page data
  home: {
    newArrivals: [
      { id: 1, name: 'Strawberries', price: '4.99', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 2, name: 'Tropical Mango', price: '2.49', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 3, name: 'Seedless Grapes', price: '3.99', image: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 4, name: 'Pineapple', price: '3.29', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 5, name: 'Blueberries', price: '5.49', image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 6, name: 'Fresh Coconut', price: '2.99', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
    ],
    featuredProducts: [
      { id: 7, name: 'Banana Bunch', price: '1.99', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 8, name: 'Red Apples', price: '2.49', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 9, name: 'Kiwi Fruit', price: '3.99', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 10, name: 'Avocado', price: '1.79', image: 'https://images.unsplash.com/photo-1594282486555-52a79914727e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 11, name: 'Fresh Figs', price: '6.99', image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 12, name: 'Pomegranate', price: '3.49', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
    ],
    bestSellers: [
      { id: 13, name: 'Watermelon', price: '4.99', image: 'https://images.unsplash.com/photo-1563114775-4ddca575f05f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 14, name: 'Cantaloupe', price: '3.49', image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 15, name: 'Peach', price: '2.99', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 16, name: 'Plums', price: '3.29', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 17, name: 'Cherries', price: '6.99', image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 18, name: 'Green Grapes', price: '3.99', image: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
    ],
    testimonials: [
      { id: 1, name: 'Sarah J.', comment: '"The freshest fruits I\'ve ever ordered online!"', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { id: 2, name: 'Michael T.', comment: '"Perfect ripeness every time. My family loves it!"', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { id: 3, name: 'Emma K.', comment: '"Organic selection is amazing. Worth every penny!"', image: 'https://randomuser.me/api/portraits/women/63.jpg' }
    ]
  },

  // Shop page data
  shop: {
    products: [
      {
        id: 1,
        name: "Organic Bananas",
        price: 1.29,
        oldPrice: 1.89,
        discount: 32,
        image: "https://storage.googleapis.com/a1aa/image/93a796d3-9281-47db-7b5b-7a188a2b84b8.jpg",
        isOrganic: true,
        category: "fresh-fruits",
        tags: ['featured']
      },
      {
        id: 2,
        name: "Juicy Strawberries",
        price: 2.99,
        oldPrice: 3.99,
        discount: 25,
        image: "https://storage.googleapis.com/a1aa/image/5e5f1249-ebbf-446d-dab6-b91dca6ef61f.jpg",
        isOrganic: false,
        category: "fresh-fruits",
        tags: ['new']
      },
      {
        id: 3,
        name: "Sweet Pineapple",
        price: 3.49,
        oldPrice: 4.49,
        discount: 22,
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        isOrganic: false,
        category: "fresh-fruits",
        tags: ['new']
      },
      {
        id: 11,
        name: "Navel Oranges",
        price: 6.99,
        oldPrice: 8.99,
        discount: 22,
        image: "https://storage.googleapis.com/a1aa/image/4f4296d3-1771-440b-7922-4cf3661a1f33.jpg",
        isOrganic: false,
        category: "citrus-fruits",
        tags: ['featured']
      },
      {
        id: 12,
        name: "Organic Lemons",
        price: 3.49,
        oldPrice: 3.99,
        discount: 13,
        image: "https://storage.googleapis.com/a1aa/image/87332c11-3231-4c3b-9a58-efb1c9c8f5e5.jpg",
        isOrganic: true,
        category: "citrus-fruits"
      },
      {
        id: 15,
        name: "Organic Blueberries",
        price: 3.99,
        oldPrice: 4.99,
        discount: 20,
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        isOrganic: true,
        category: "berries",
        tags: ['best-seller']
      },
      {
        id: 17,
        name: "Tropical Mango",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "tropical-fruits",
        tags: ['new']
      },
      {
        id: 18,
        name: "Banana Bunch",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "fresh-fruits",
        tags: ['featured']
      },
      {
        id: 19,
        name: "Red Apples",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "fresh-fruits",
        tags: ['best-seller']
      }
    ],
    categories: [
      { id: 'fresh-fruits', name: 'Fresh Fruits', count: 5 },
      { id: 'citrus-fruits', name: 'Citrus Fruits', count: 2 },
      { id: 'berries', name: 'Berries', count: 1 },
      { id: 'tropical-fruits', name: 'Tropical Fruits', count: 1 }
    ]
  },

  // Product detail data
  getProductDetail: function(id) {
    // In a real app, you would fetch product data based on the ID
    const product = {
      id: id,
      name: "Marketside Fresh Organic Bananas, Bunch",
      price: 0.89,
      oldPrice: 1.99,
      rating: 3,
      sku: "E7W6QH40",
      description: "Vivamus adipiscing elit ut dolor dignissim semper. Nulla luctus malesuada tincidunt...",
      images: [
        "https://storage.googleapis.com/a1aa/image/fc127333-2115-4a92-32f5-54a9ec6fdb33.jpg",
        "https://storage.googleapis.com/a1aa/image/b6bc8da0-c6ea-4ea0-0b83-1a3478efbb26.jpg",
        "https://storage.googleapis.com/a1aa/image/2eb77d40-f1f2-4af6-f9b5-7992eefa901b.jpg",
        "https://storage.googleapis.com/a1aa/image/4eb7571b-b591-4686-f204-22814da41894.jpg"
      ],
      isNew: true,
      isOrganic: true
    };

    // Generate related products by excluding the current product
    const relatedProducts = this.shop.products.filter(p => p.id !== id).slice(0, 4);

    return {
      product,
      relatedProducts
    };
  }
};

export default mockData;