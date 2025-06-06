import React from 'react';
import { Card, Container, Row, Col, Image, Stack } from 'react-bootstrap';

function SimpleCard() {
  const item = {
    name: 'Hoai Nguyen - FPT DaNang',
    mobile: '0982827763',
    imageUrl: 'fpt.png', // nhớ đặt trong thư mục public/
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Row className="align-items-center justify-content-between">
            {/* Left: Logo + FPT UNIVERSITY */}
            <Col xs="auto">
              <Stack gap={2}>
                <Image src={item.imageUrl} height="50" alt="FPT Logo" />
                <Card.Title className="text-warning fw-bold mb-0">
                  FPT UNIVERSITY
                </Card.Title>
              </Stack>
            </Col>

            {/* Right: Info */}
            <Col xs="auto" className="text-end">
              <Stack gap={1}>
                <div className="fw-bold">{item.name}</div>
                <div className="text-muted">Mobile: {item.mobile}</div>
              </Stack>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SimpleCard;
