import React from "react";
import logo from "../assets/images/vignesh-dev-logo-new.png";

const Header = () => {
  return (
    <header className="position-relative z-3">
      <nav className="navbar navbar-expand-lg bg-dark bg-opacity-50">
        <div className="container">

          <div className="col-6 col-md-3">
            <img src={logo} alt="logo" className="w-100" />
          </div>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-3 fw-bold">
              <li className="nav-item">
                <a className="nav-link text-white active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button className="button-bg border-0 d-none d-lg-flex">
              Request A Quote
            </button>

            <button
              className="navbar-toggler bg-light d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className="collapse d-lg-none position-absolute bg-white w-75 shadow"
        id="navbarNav"
      >
        <ul className="navbar-nav p-4">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
