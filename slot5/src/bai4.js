// src/bai4.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/Logo_FPT_Education.png';

function Bai4() {
  return (
    <div>
      {/* Header */}
      <div className="text-center py-3" style={{ backgroundColor: '#ec9023' }}>
        <img
          src={logo} alt="FPT Logo" className="img-fluid w-25" />

          
        <h2 className="fw-bold mt-2 text-white">FPT UNIVERSITY</h2>
        {/* Navigation */}
        <nav className="mt-2">
          <a href="#home" className="text-white mx-2">Home</a>
          <a href="#about" className="text-white mx-2">About</a>
          <a href="#contact" className="text-white mx-2">Contact</a>
        </nav>
      </div>

      {/* About Section */}
      <section id="about" className="text-center my-5">
        <h3 className="fw-bold">About</h3>
        <p>This is the about section of the website.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center my-5">
        <h3 className="fw-bold">Contact</h3>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-3" style={{ backgroundColor: '#f1c27d' }}>
        <small>© 2023 Website. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default Bai4;
