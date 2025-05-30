// src/Bai3.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bai3() {
  return (
    <div>
      {/* Header */}
      <div className="bg-light py-5 text-center">
        <h1 className="display-5">Let's test the grid!</h1>
      </div>

      {/* Nav Tabs */}
      <ul className="nav nav-tabs justify-content-center my-4">
        <li className="nav-item">
          <a className="nav-link active" href="#!">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#!" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      {/* Grid */}
      <div className="container mb-5">
        <div className="row mb-2">
          <div className="col bg-secondary text-white border p-3">First col</div>
          <div className="col bg-secondary text-white border p-3">Second col</div>
        </div>
        <div className="row mb-2">
          <div className="col bg-light border p-3 text-center">col</div>
          <div className="col bg-light border p-3 text-center">col</div>
                 
        </div>
        <div className="row">
          <div className="col bg-light border p-3 text-center">col</div>
          <div className="col bg-light border p-3 text-center">col</div>
          <div className="col bg-light border p-3 text-center">col</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary-subtle text-center py-4">
        <h2 className="fw-bold">Created by ABC!</h2>
      </footer>
    </div>
  );
}

export default Bai3;
