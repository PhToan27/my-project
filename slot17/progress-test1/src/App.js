import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import LaptopList from './pages/LaptopList';
import LaptopDetail from './pages/LaptopDetail';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/laptops" element={<LaptopList />} />
        <Route path="/laptops/:id" element={<LaptopDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
