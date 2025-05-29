import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import logo from './assets/Logo_FPT_Education.png';
import banner from './assets/banner.jpg';
import student1 from './assets/student1.jpg';
import student2 from './assets/student2.jpg';
import student3 from './assets/student3.jpeg';
import student4 from './assets/student4.jpg';

function Bai5() {
  const students = [
    { img: student1, name: "Nguyễn Thị Khánh Huyền", id: "DE170102", major: "Đà Nẵng" },
    { img: student2, name: "Văn Mai Hương", id: "DE190377", major: "Quảng Nam" },
    { img: student3, name: "Trịnh Thăng Bình", id: "DE190467", major: "Quảng Ngãi" },
    { img: student4, name: "Lê Lí Lan Anh", id: "DE170104", major: "Đà Nẵng" },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-warning p-2">
        <div className="container d-flex justify-content-between align-items-center">
          <img src={logo} alt="FPT Logo" style={{ width: '120px' }} />
          <nav>
            <a href="#!" className="mx-2 text-dark">Home</a>
            <a href="#!" className="mx-2 text-dark">About</a>
            <a href="#!" className="mx-2 text-dark">Students</a>
          </nav>
          <input type="text" placeholder="Search" className="form-control w-25" />
        </div>
      </header>

      {/* Banner */}
      <img src={banner} alt="Banner" className="img-fluid p-2 w-100" />

      {/* Breadcrumb */}
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#!">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          </ol>
        </nav>
      </div>

      {/* Title */}
      <div className="text-center my-4">
        <h2>Students Detail</h2>
      </div>

      {/* Students Grid */}
      <div className="container mb-5">
        <div className="row g-4">
          {students.map((s, index) => (
            <div className="col-md-3" key={index}>
              <div className="card text-center h-100">
                <img
                  src={s.img}
                  className="card-img p-2"
                  style={{ height: '250px', objectFit: 'cover', borderRadius: '6px' }}
                  alt="student"
                />
                <div className="card-body">
                  <h6>{s.name}</h6>
                  <p className="mb-1">{s.id}</p>
                  <p className="text-muted">{s.major}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`status-${index}`}
                        id={`absent-${index}`}
                      />
                      <label className="form-check-label" htmlFor={`absent-${index}`}>
                        Absent
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`status-${index}`}
                        id={`present-${index}`}
                      />
                      <label className="form-check-label" htmlFor={`present-${index}`}>
                        Present
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-warning">Submit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-warning text-center py-4">
        <p>
          Our Address<br />
          FPT University, HCM
        </p>
        <div className="mb-2">
          <i className="bi bi-google mx-2"></i>
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-linkedin mx-2"></i>
          <i className="bi bi-github mx-2"></i>
          <i className="bi bi-envelope-fill mx-2"></i>
        </div>
        <small>© Copyright 2023</small>
      </footer>
    </div>
  );
}

export default Bai5;
