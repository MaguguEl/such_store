const productsData = {
    shopProducts: [
      {
        id: 1,
        name: "Video Potatoes Whole Fresh, 5lb Bag",
        price: 0.50,
        oldPrice: 0.88,
        discount: 15,
        image: "https://storage.googleapis.com/a1aa/image/db05b208-7b5f-4383-df36-694d1a2dc795.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 2,
        name: "Large Bagged Oranges",
        price: 0.89,
        oldPrice: 1.78,
        discount: 15,
        image: "https://storage.googleapis.com/a1aa/image/4f4296d3-1771-440b-7922-4cf3661a1f33.jpg",
        isOrganic: true,
        inStock: true
      },
      {
        id: 3,
        name: "Strawberries - 1lb",
        price: 1.50,
        oldPrice: 2.16,
        discount: 15,
        image: "https://storage.googleapis.com/a1aa/image/5e5f1249-ebbf-446d-dab6-b91dca6ef61f.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 4,
        name: "Simple Kitchen FD Sliced Strawberries - 1.08lb",
        price: 21.90,
        oldPrice: 24.00,
        discount: 11,
        image: "https://storage.googleapis.com/a1aa/image/728499b9-2c66-4bba-aae1-a30e680a10d1.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 5,
        name: "Peach - each",
        price: 0.75,
        oldPrice: 3.75,
        discount: 99,
        image: "https://storage.googleapis.com/a1aa/image/340c3e7d-4099-483a-bf61-fe0d09c9d83e.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 6,
        name: "Marketside Fresh Organic Bananas, Bunch",
        price: 0.89,
        oldPrice: 1.89,
        discount: 15,
        image: "https://storage.googleapis.com/a1aa/image/93a796d3-9281-47db-7b5b-7a188a2b84b8.jpg",
        isOrganic: true,
        inStock: true
      },
      {
        id: 7,
        name: "Large Garden Spinach & Herb Wrap Tortilla",
        price: 27.90,
        oldPrice: 32.90,
        discount: 0,
        image: "https://storage.googleapis.com/a1aa/image/befe5cbb-ed1d-4d8b-41c2-60471cfe71d9.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 8,
        name: "Hallmark Harvest Caramel Apple Soft Caramels",
        price: 19.37,
        oldPrice: 31.37,
        discount: 45,
        image: "https://storage.googleapis.com/a1aa/image/6d6e5670-f47d-4cc0-aca2-0ab58b7f2e89.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 9,
        name: "Fresh Purple Eggplant",
        price: 2.99,
        oldPrice: 3.96,
        discount: 0,
        image: "https://storage.googleapis.com/a1aa/image/8bd043d9-2bf5-485b-88dd-04e7adca883b.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 10,
        name: "Fresh Pomegranate, Each",
        price: 1.50,
        oldPrice: 2.88,
        discount: 15,
        image: "https://storage.googleapis.com/a1aa/image/a8298580-0659-4e1a-cc0f-b29ec46dbfb9.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 11,
        name: "Fresh Lemon, Each",
        price: 0.50,
        oldPrice: 0.99,
        discount: 15,
        image: "https://storage.googleapis.com/a1aa/image/87332c11-3231-4c3b-9a58-efb1c9c8f5e5.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 12,
        name: "Fresh Cauliflower, Each",
        price: 12.79,
        oldPrice: 14.79,
        discount: 15,
        image: "https://storage.googleapis.com/a1aa/image/1041a287-7992-46a3-4548-cf85e4ab50a5.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 13,
        name: "Fresh Broccoli Crowns, Each",
        price: 11.54,
        oldPrice: 17.88,
        discount: 15,
        image: "https://storage.googleapis.com/a1aa/image/b3461ff9-f4cd-43d8-40e2-25e85710960b.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 14,
        name: "Blackberries - 6oz",
        price: 2.99,
        oldPrice: 4.99,
        discount: 40,
        image: "https://storage.googleapis.com/a1aa/image/d54c3256-318e-40f9-35a8-bf1deaadf743.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 15,
        name: "30g Protein Shake - Salted Caramel - 11 oz - 4pk",
        price: 11.99,
        oldPrice: 12.00,
        discount: 0,
        image: "https://storage.googleapis.com/a1aa/image/5303d6fc-7b37-40d4-9c04-c4c1c974ee11.jpg",
        isOrganic: false,
        inStock: true
      },
      {
        id: 16,
        name: "Fresh Granny Smith Apple, Each",
        price: 9.88,
        oldPrice: 15.99,
        discount: 17,
        image: "https://storage.googleapis.com/a1aa/image/80e72066-a2c9-40be-515a-bd309cb67665.jpg",
        isOrganic: true,
        inStock: true
      }
    ],
    newArrivals: [
      { 
        id: 17, 
        name: 'Orange Juice', 
        price: 3.50, 
        image: 'https://storage.googleapis.com/a1aa/image/5e453448-dbb2-41c4-b240-c9872cadc423.jpg',
        isNew: true
      },
      { 
        id: 18, 
        name: 'Lemon Cleaner', 
        price: 3.13, 
        image: 'https://storage.googleapis.com/a1aa/image/b8fd5d7d-be8a-403e-383c-c04e9e138abe.jpg',
        isNew: true
      },
      { 
        id: 19, 
        name: 'Cooking Oil', 
        price: 2.46, 
        image: 'https://storage.googleapis.com/a1aa/image/eda2484d-ef27-4388-759b-350c04819d4e.jpg',
        isNew: true
      },
      { 
        id: 20, 
        name: 'Snack Pack', 
        price: 7.77, 
        image: 'https://storage.googleapis.com/a1aa/image/fecad9a1-e9f0-4c3c-bc2a-0d4377e1bb3c.jpg',
        isNew: true
      },
      { 
        id: 21, 
        name: 'Melon', 
        price: 1.99, 
        image: 'https://storage.googleapis.com/a1aa/image/5ae844ae-d139-4ec4-aaea-2bf001e99c1e.jpg',
        isNew: true
      },
      { 
        id: 22, 
        name: 'Baby Food', 
        price: 3.49, 
        image: 'https://storage.googleapis.com/a1aa/image/163755ef-f3e4-4200-fd49-2c2a2fabba14.jpg',
        isNew: true
      }
    ],
    featuredProducts: [
      { 
        id: 23, 
        name: 'Bananas', 
        price: 2.99, 
        image: 'https://storage.googleapis.com/a1aa/image/313efe8c-95c8-4948-118e-a030b31d5651.jpg',
        isFeatured: true
      },
      { 
        id: 24, 
        name: 'Potato Chips', 
        price: 7.99, 
        image: 'https://storage.googleapis.com/a1aa/image/f25c4dc4-ae70-4378-da67-f3d90c02b63f.jpg',
        isFeatured: true
      },
      { 
        id: 25, 
        name: 'Frozen Pizza', 
        price: 5.99, 
        image: 'https://storage.googleapis.com/a1aa/image/28a4a512-c2e4-41f7-a325-c1b3d6f3cf98.jpg',
        isFeatured: true
      },
      { 
        id: 26, 
        name: 'Red Meat', 
        price: 7.79, 
        image: 'https://storage.googleapis.com/a1aa/image/6fab6716-3ea2-468f-49c7-4e53380e7fb5.jpg',
        isFeatured: true
      },
      { 
        id: 27, 
        name: 'Liquid Detergent', 
        price: 5.99, 
        image: 'https://storage.googleapis.com/a1aa/image/2c6eb394-4f65-4739-ca02-7a17ce195e4e.jpg',
        isFeatured: true
      },
      { 
        id: 28, 
        name: 'Sausage', 
        price: 7.99, 
        image: 'https://storage.googleapis.com/a1aa/image/d72de055-d7b7-4b53-a23c-bea7dc6c12af.jpg',
        isFeatured: true
      }
    ],
    bestSellers: [
      { 
        id: 29, 
        name: 'Yogurt', 
        price: 3.00, 
        image: 'https://storage.googleapis.com/a1aa/image/2e38009c-ba97-4ca0-2742-05601ed7e41e.jpg',
        isBestSeller: true
      },
      { 
        id: 30, 
        name: 'Melon', 
        price: 1.21, 
        image: 'https://storage.googleapis.com/a1aa/image/5ae844ae-d139-4ec4-aaea-2bf001e99c1e.jpg',
        isBestSeller: true
      },
      { 
        id: 31, 
        name: 'Maple Syrup', 
        price: 2.99, 
        image: 'https://storage.googleapis.com/a1aa/image/1385873d-09ac-4574-425f-4dea79ba3eca.jpg',
        isBestSeller: true
      },
      { 
        id: 32, 
        name: 'Coffee Beans', 
        price: 11.99, 
        image: 'https://storage.googleapis.com/a1aa/image/f4dfd426-74bf-44b8-c427-ee4da3f1be4a.jpg',
        isBestSeller: true
      },
      { 
        id: 33, 
        name: 'Raisin', 
        price: 7.77, 
        image: 'https://storage.googleapis.com/a1aa/image/8db8483e-2c27-4aa3-ab7b-fa324053281a.jpg',
        isBestSeller: true
      },
      { 
        id: 34, 
        name: 'Spices', 
        price: 2.99, 
        image: 'https://storage.googleapis.com/a1aa/image/d6268b5c-d5e7-498d-db3f-cda131e3fcba.jpg',
        isBestSeller: true
      },
      { 
        id: 35, 
        name: 'Honey', 
        price: 7.75, 
        image: 'https://storage.googleapis.com/a1aa/image/7c06b403-9d68-4929-24af-08db0f14eb1c.jpg',
        isBestSeller: true
      }
    ],
    testimonials: [
      { 
        id: 1, 
        name: 'Customer', 
        comment: '"Great quality and fast delivery!"', 
        image: 'https://storage.googleapis.com/a1aa/image/79f99c04-724f-4a68-c043-4b8840e1ae2d.jpg' 
      },
      { 
        id: 2, 
        name: 'Maria', 
        comment: '"Affordable prices and excellent service."', 
        image: 'https://storage.googleapis.com/a1aa/image/f3c07db5-a2a9-4150-79eb-7b0685d550b6.jpg' 
      },
      { 
        id: 3, 
        name: 'Melissa', 
        comment: '"I love shopping here, always fresh products."', 
        image: 'https://storage.googleapis.com/a1aa/image/55fa66d5-4299-4a58-c6cd-38044ae7d6b7.jpg' 
      }
    ]
  };
  
  export default productsData;