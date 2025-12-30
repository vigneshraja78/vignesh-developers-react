import React from "react";
import logo from "../assets/images/vignesh-dev-logo-new.png";
import footerBg from "../assets/images/footer-bg.png";

const Footer = () => {
  return (
    <footer className="position-relative z-3">

      <section
        className="cta-footer py-5 bg-black"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="container d-block d-lg-flex">

          <div className="col-12 col-md-6 col-lg-3">
            <img src={logo} alt="logo" className="w-100 mb-3" />
            <p className="text-white fs-17">
              We are a trusted construction company delivering excellence in
              residential and commercial projects.
            </p>
            <a href="#" className="text-decoration-none sub-title-color fs-17">
              <i className="bi bi-arrow-right"></i> Read More
            </a>
          </div>

          <div className="col-12 col-md-6 col-lg-3 py-lg-4 px-lg-5">
            <h5 className="sub-title-color fw-bold">Quick Links</h5>
            <ul className="list-unstyled py-3">
              {["Home", "About Us", "Services", "Projects", "Contact Us"].map(
                (item, i) => (
                  <li key={i} className="lh-lg">
                    <a href="#" className="text-white fs-17 text-decoration-none">
                      <i className="bi bi-arrow-right sub-title-color"></i>{" "}
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 py-lg-4">
            <h5 className="sub-title-color fw-bold">Services</h5>
            <ul className="list-unstyled py-3">
              {[
                "Residential Construction",
                "Commercial Construction",
                "Renovation & Remodeling",
              ].map((service, i) => (
                <li key={i} className="lh-lg">
                  <a href="#" className="text-white fs-17 text-decoration-none">
                    <i className="bi bi-arrow-right sub-title-color"></i>{" "}
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 py-lg-4">
            <h5 className="sub-title-color fw-bold">Contact Info</h5>
            <ul className="list-unstyled py-3">
              <li className="text-white fs-17 lh-lg">
                <i className="bi bi-geo-alt-fill sub-title-color"></i>{" "}
                123 Vignesh Developers, Sample Address, Coimbatore
              </li>
              <li className="text-white fs-17 lh-lg">
                <i className="bi bi-telephone sub-title-color"></i>{" "}
                +91 98765 43210
              </li>
              <li className="text-white fs-17 lh-lg">
                <i className="bi bi-envelope sub-title-color"></i>{" "}
                vigneshdevelopers@gmail.com
              </li>
            </ul>

            <ul className="list-unstyled d-flex">
              {[
                "facebook",
                "instagram",
                "twitter-x",
                "youtube",
              ].map((icon, i) => (
                <li key={i} className="p-2">
                  <a
                    href="#"
                    className="border fs-17 px-2 py-1 rounded text-white d-inline-block"
                  >
                    <i className={`bi bi-${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="copyright bg-black text-center">
        <hr className="text-white mt-0" />
        <div className="container p-3">
          <p className="text-white fs-17 mb-0">
            &copy; 2025 Vignesh Developers. All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
