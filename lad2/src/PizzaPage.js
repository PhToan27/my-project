import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import menu1 from './images/menu1.png';
import menu2 from './images/menu2.png';
import menu3 from './images/menu3.png';
import menu4 from './images/menu4.png';
import pizza1 from './images/pizza1.png';
import pizza2 from './images/pizza2.png';
import pizza3 from './images/pizza3.png';


function PizzaPage() {
  <css />;
  const pizzas = [
    {
      name: 'Margherita Pizza',
      priceOld: '$40.00',
      priceNew: '$24.00',
      tag: 'SALE',
      image: menu1,
    },
    {
      name: 'Mushroom Pizza',
      price: '$25.00',
      tag: 'null',
      image: menu2,
    },
    {
      name: 'Hawaiian Pizza',
      price: '$10.00',
      tag: 'NEW',
      image: menu3,
    },
    {
      name: 'Pesto Pizza',
      priceOld: '$30.00',
      priceNew: '$16.00',
      tag: 'SALE',
      image: menu4,
    },
    
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <a className="navbar-brand" href="#">Pizza House</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-danger" type="submit">🔍</button>
          </form>
        </div>
      </nav>

      
     {/* Carousel Slider */}
<div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pizza1} className="d-block w-100" alt="Slide 1" />
      <div className="carousel-caption d-none d-md-block">
        <h2>Neapolitan Pizza</h2>
        <p>Try the most authentic Italian pizza!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pizza2} className="d-block w-100" alt="Slide 2" />
      <div className="carousel-caption d-none d-md-block">
        <h2>Delicious Variety</h2>
        <p>Fresh, hot, and ready to serve.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pizza3} className="d-block w-100" alt="Slide 3" />
      <div className="carousel-caption d-none d-md-block">
        <h2>Book Your Table</h2>
        <p>Enjoy your meal with family and friends.</p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      {/* Pizza Menu */}
      <div className="bg-dark text-white py-5">
        <div className="container">
          <h3 className="text-center mb-4">Our Menu</h3>
          <div className="row">
            {pizzas.map((pizza, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card h-100">
                  <img src={pizza.image} className="card-img-top" alt={pizza.name} />
                  <div className="card-body text-center">
                    {pizza.tag && (
                      <span className={`badge bg-${pizza.tag === 'SALE' ? 'warning' : 'info'} text-dark mb-2`}>
                        {pizza.tag}
                      </span>
                    )}
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">
                      {pizza.priceOld && (
                        <span className="text-muted text-decoration-line-through me-2">
                          {pizza.priceOld}
                        </span>
                      )}
                      <span className="text-danger">{pizza.priceNew || pizza.price}</span>
                    </p>
                    <button className="btn btn-dark">Buy</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-4">Book Your Table</h3>
          <form>
            <div className="row mb-3">
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Your Name *" />
              </div>
              <div className="col-md-4">
                <input type="email" className="form-control" placeholder="Your Email *" />
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>Select a Service</option>
                  <option>Dine In</option>
                  <option>Take Away</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Please write your comment"></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-warning">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2025 Pizza House. All rights reserved.
      </footer>
    </div>
  );
}

export default PizzaPage;
