// components/Cart.js
import { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, count: Math.max(1, item.count + delta) };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.count, 0);

  return (
    <Container className="my-5">
      <h3 className="mb-4">Your Cart</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Laptop</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.brand} {item.model}</td>
              <td>
                <Button size="sm" onClick={() => handleQuantityChange(item.id, -1)}>-</Button>{' '}
                {item.count}{' '}
                <Button size="sm" onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
              </td>
              <td>${item.price}</td>
              <td>${(item.count * parseFloat(item.price)).toFixed(2)}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleRemove(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5>Total: ${total.toFixed(2)}</h5>
      <Link to="/checkout">
        <Button variant="success" className="mt-3">Proceed to Checkout</Button>
      </Link>
    </Container>
  );
}

export default Cart;
