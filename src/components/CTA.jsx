import ctaBg from "../assets/images/cta-bg.jpg";

const CTA = () => {
  return (
    <section
      className="cta-footer py-5 position-relative"
      style={{
        backgroundImage: `url(${ctaBg})`,
      }}
    >
  
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="text-center p-lg-5 p-4">
              <h2 className="fw-semibold page-h2-heading text-white">
                Ready to Start Your Construction Project?
              </h2>

              <p className="text-white fs-17 lh-base mb-4">
                Contact us today for a free consultation and estimate
              </p>

              <div className="d-flex justify-content-center">
                <button className="button-bg border-0 px-5 py-3">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
