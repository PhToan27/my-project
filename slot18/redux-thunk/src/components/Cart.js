import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, removeFromCart } from '../features/cart/cartSlice';
import { Container, Table, Button, Form } from 'react-bootstrap';

export default function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState(
    cart.reduce((obj, item) => ({ ...obj, [item.id]: item.quantity }), {})
  );

  const handleUpdate = (id) => {
    dispatch(updateCart({ id, quantity: parseInt(quantities[id]) }));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td style={{ width: '100px' }}>
                  <Form.Control
                    type="number"
                    min={1}
                    value={quantities[item.id]}
                    onChange={(e) =>
                      setQuantities({ ...quantities, [item.id]: e.target.value })
                    }
                  />
                </td>
                <td>${item.price}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleUpdate(item.id)}
                    className="me-2"
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <h4>Total: ${total.toFixed(2)}</h4>
    </Container>
  );
}
