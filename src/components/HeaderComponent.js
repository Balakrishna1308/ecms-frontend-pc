import React from 'react';

const HeaderComponent = ({ setFilters }) => {
  const handleSearch = (e) => {
    setFilters({ search: e.target.value });
  };

  const handleSort = (e) => {
    setFilters({ sort: e.target.value });
  };

  return (
    <header className="header">
      <nav className="breadcrumb">Home > Electronics > Mobile Phones</nav>
      <div className="header-controls">
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="search-bar"
        />
        <select onChange={handleSort} className="sort-dropdown">
          <option value="popularity">Sort by Popularity</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </header>
  );
};

export default HeaderComponent;
