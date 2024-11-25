import React from 'react';

const FilterSidebarComponent = ({ setFilters }) => {
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  return (
    <aside className="filter-sidebar">
      <h3>Filters</h3>
      <div>
        <h4>Category</h4>
        <input
          type="checkbox"
          onChange={() => handleFilterChange('category', 'electronics')}
        />
        Electronics
        <input
          type="checkbox"
          onChange={() => handleFilterChange('category', 'fashion')}
        />
        Fashion
      </div>
      <div>
        <h4>Price Range</h4>
        <input
          type="range"
          onChange={(e) => handleFilterChange('price', e.target.value)}
        />
      </div>
      <div>
        <h4>Ratings</h4>
        <input
          type="checkbox"
          onChange={() => handleFilterChange('rating', 4)}
        />
        4 Stars & Above
      </div>
    </aside>
  );
};

export default FilterSidebarComponent;
