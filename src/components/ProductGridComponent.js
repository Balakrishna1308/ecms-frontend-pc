
import React from 'react';
import ProductCardComponent from './ProductCardComponent';

const ProductGridComponent = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGridComponent;
