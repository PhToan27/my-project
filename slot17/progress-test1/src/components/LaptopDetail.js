import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Alert } from 'react-bootstrap';

function LaptopDetail() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/Laptops/${id}`)
      .then(res => {
        setLaptop(res.data);
        setNotFound(false);
      })
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) {
    return (
      <Container className="text-center my-5">
        <Alert variant="danger">404 - Laptop Not Found</Alert>
        <Link to="/laptops">
          <Button variant="secondary">Back to List</Button>
        </Link>
      </Container>
    );
  }

  if (!laptop) return null;

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card style={{ maxWidth: '600px', width: '100%' }} className="shadow">
        <Card.Img variant="top" src={laptop.image} alt={laptop.model} style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text><strong>Year:</strong> {laptop.year}</Card.Text>
          <Card.Text><strong>Price:</strong> {laptop.price}</Card.Text>
          <Card.Text><strong>Description:</strong> This is a high-performance laptop ideal for professionals and students.</Card.Text>
          <Link to="/laptops">
            <Button variant="primary" className="w-100">Back to List</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LaptopDetail;
