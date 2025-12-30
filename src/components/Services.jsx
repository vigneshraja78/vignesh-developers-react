const Services = () => {
  return (
    <section className="services section-bg-blue py-5">
      <div className="container px-lg-5 p-4">
        <div className="text-center">
          <h5 className="sub-title-color">What We Offer</h5>
          <h2 className="fw-semibold page-h2-heading">Our Services</h2>
          <p className="text-body-secondary">
            Comprehensive Construction Solutions
          </p>
        </div>

        <div className="row my-5">
          <div className="col-md-4 p-2">
            <div className="text-center bg-white shadow-sm p-md-4 p-2">
              <i className="bi bi-house-door fs-1 sub-title-color"></i>
              <h4 className="fs-5 fw-bold">Residential Construction</h4>
              <p className="text-body-secondary">
                We build durable and elegant homes designed to match your
                lifestyle and budget.
              </p>
            </div>
          </div>

          <div className="col-md-4 p-2">
            <div className="text-center bg-white shadow-sm p-md-4 p-2">
              <i className="bi bi-buildings fs-1 sub-title-color"></i>
              <h4 className="fs-5 fw-bold">Commercial Construction</h4>
              <p className="text-body-secondary">
                From offices to retail spaces, we deliver efficient and modern
                commercial buildings.
              </p>
            </div>
          </div>

          <div className="col-md-4 p-2">
            <div className="text-center bg-white shadow-sm p-md-4 p-2">
              <i className="bi bi-tools fs-1 sub-title-color"></i>
              <h4 className="fs-5 fw-bold">Renovation & Remodeling</h4>
              <p className="text-body-secondary">
                Transform your existing space with our expert renovation and
                remodeling services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
