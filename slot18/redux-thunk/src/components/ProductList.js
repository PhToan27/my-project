import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/cart/cartThunk';
import { addToCart } from '../features/cart/cartSlice';
import { Button, Card, Container } from 'react-bootstrap';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);
  
  return (
    <Container>
      <h2>Product List</h2>
      {products.map(product => (
        <Card key={product.id} className="mb-3">
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
