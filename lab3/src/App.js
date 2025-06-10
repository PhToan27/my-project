import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Menu from './components/Menu';
import BookTable from './components/BookTable';

function App() {
  return (
    <div style={{ background: '#333', minHeight: '100vh' }}>
      <Header />
      <Banner />
      <Menu />
      <BookTable />
    </div>
  );
}

export default App;