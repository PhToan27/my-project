import React, { useState } from 'react';

function ProductList2() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProductId, setSelectedProductId] = useState(1);

  const handleRadioChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    setSelectedProductId(productId);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="radio"
            name="product"
            id={`product-${product.id}`}
            value={product.id}
            checked={selectedProductId === product.id}
            onChange={handleRadioChange}
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}

      {selectedProductId !== null && (
        <p>Bạn đã chọn: {products.find(p => p.id === selectedProductId)?.name}</p>
      )}
    </div>
  );
}

export default ProductList2;
