import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector(state => state.cart.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - Quantity: {item.quantity} - Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
