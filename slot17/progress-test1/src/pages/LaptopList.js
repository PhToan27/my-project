import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Form, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';


function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  const fetchLaptops = async () => {
    const res = await axios.get('http://localhost:3001/Laptops');
    setLaptops(res.data);
    setFiltered(res.data);
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  const handleSearch = () => {
    const results = laptops.filter(laptop =>
      laptop.brand.toLowerCase().includes(search.toLowerCase()) ||
      laptop.model.toLowerCase().includes(search.toLowerCase()) ||
      laptop.price.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Laptop Management</h2>

      <Form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
  <InputGroup className="mb-4">
    <Form.Control
      type="text"
      placeholder="Search by brand or model..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <Button type="submit" variant="primary">Search</Button>
  </InputGroup>
</Form>

<Carousel className="mb-4">
  <Carousel.Item>
    <img
      className="d-block w-40"
      src="images/dell-xps13.jpg"
      alt="Slide 1"
      style={{ height: '350px', objectFit: 'cover', borderRadius: '10px' }}
    />
    <Carousel.Caption style={{
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '10px',
      padding: '10px 20px',
      color: '#000'
    }}>
      <h3 style={{ color: '#000' }}>Powerful Performance</h3>
      <p style={{ color: '#333' }}>Discover the latest laptops with high-end specs.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-40"
      src="images/hp-spectre.jpg"
      alt="Slide 2"
      style={{ height: '350px', objectFit: 'cover', borderRadius: '10px' }}
    />
    <Carousel.Caption style={{
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '10px',
      padding: '10px 20px',
      color: '#000'
    }}>
      <h3 style={{ color: '#000' }}>Modern & Sleek</h3>
      <p style={{ color: '#333' }}>Stylish laptops designed for every need.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-40"
      src="images/lenovo-thinkpad.jpg"
      alt="Slide 3"
      style={{ height: '350px', objectFit: 'cover', borderRadius: '10px' }}
    />
    <Carousel.Caption style={{
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '10px',
      padding: '10px 20px',
      color: '#000'
    }}>
      <h3 style={{ color: '#000' }}>Work from Anywhere</h3>
      <p style={{ color: '#333' }}>Mobility meets productivity in every device.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filtered.map(laptop => (
          <Col key={laptop.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={laptop.image} alt={laptop.model} style={{ height: '180px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text><strong>Year:</strong> {laptop.year}</Card.Text>
                <Card.Text><strong>Price:</strong> {laptop.price}</Card.Text>
                <Link to={`/laptops/${laptop.id}`}>
                  <Button variant="info" className="w-100">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LaptopList;
