import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, removeFromCart } from '../features/cart/cartSlice';

const products = [
  {
    id: '123456',
    name: 'Example Product',
    price: 9.99,
    description: 'This is an example product.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '654321',
    name: 'Another Product',
    price: 19.99,
    description: 'Another example product.',
    catalogs: ['catalog3'],
  }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button onClick={() => dispatch(updateCart({ id: product.id, quantity: 2 }))}>Update to Cart</button>
          <button onClick={() => dispatch(removeFromCart(product.id))}>Delete from Cart</button>
        </div>
      ))}
    </div>
  );
}
