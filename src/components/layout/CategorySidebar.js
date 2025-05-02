import React from 'react';

const CategorySidebar = () => {
  const categories = [
    'All Categories',
    'Fresh Vegetables',
    'Fresh Fruits',
    'Cooking Essentials',
    'Snacks & Beverages',
    'Organic Foods',
    'Household Items',
    'Personal Care',
    'Baby Care',
    'Pet Supplies'
  ];

  return (
    <aside className="col-12 col-md-3 mb-4 sidebar">
      <ul className="list-unstyled fw-semibold">
        {categories.map((category, index) => (
          <li key={index}>
            <a href="#" className="d-flex align-items-center gap-2">
              <i className="fas fa-angle-right"></i> {category}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;