import React from 'react';

const ProductCardComponent = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-rating">⭐ {product.rating}</p>
      <div className="product-actions">
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>
      {product.badge && <span className="product-badge">{product.badge}</span>}
    </div>
  );
};

export default ProductCardComponent;
