import { Card } from 'react-bootstrap';

function MyInfo() {
  return (
    <Card bg="info" text="white" className="d-flex text-center mb-3">
      <Card.Body>
        <Card.Title>Nguyễn Đỗ Phúc Toàn</Card.Title>
        <Card.Text>
          Xin chào! Tôi là sinh viên trường đại học FPT, tôi đang học lập trình React.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyInfo;
