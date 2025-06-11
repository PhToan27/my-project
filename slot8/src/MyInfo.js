import { Card } from 'react-bootstrap';

function MyInfo() {
  
  return (
    <div>
    <h1 className="tex-center">bài tập 1</h1>
    <Card bg="info" text="white" className="d-flex text-center mb-3">
      <Card.Body>
        <Card.Title>Nguyễn Đỗ Phúc Toàn</Card.Title>
        <Card.Text>
          Xin chào! Tôi là sinh viên trường đại học FPT, tôi đang học lập trình React.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}


export default MyInfo;
