const Process = () => {
  return (
    <section className="projects py-5">
      <div className="d-none d-lg-block process-hr-line">
        <hr className="sub-title-color border-3" />
      </div>

      <div className="container px-md-5">
        <div className="text-center">
          <h5 className="sub-title-color">Process</h5>
          <h2 className="fw-semibold page-h2-heading">How We Work</h2>
        </div>

        <div className="row my-5">
          <div className="col-12 col-lg-3 col-md-6 z-3">
            <div className="text-center fs-1 p-md-4 p-2 bg-white">
              <i className="bi bi-person-video3 sub-title-color"></i>
              <h4 className="fs-5 fw-bold">Consultation</h4>
              <p className="text-body-secondary fs-6 mb-0">
                We understand your requirements and provide expert guidance.
              </p>
              <div className="text-end">
                <p className="process-number">01</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6 z-3">
            <div className="text-center fs-1 p-md-4 p-2 bg-white">
              <i className="bi bi-brush sub-title-color"></i>
              <h4 className="fs-5 fw-bold">Planning & Design</h4>
              <p className="text-body-secondary fs-6 mb-0">
                Detailed planning and design to ensure efficiency and cost
                control.
              </p>
              <div className="text-end">
                <p className="process-number">02</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6 z-3">
            <div className="text-center fs-1 p-md-4 p-2 bg-white">
              <i className="bi bi-building sub-title-color"></i>
              <h4 className="fs-5 fw-bold">Construction</h4>
              <p className="text-body-secondary fs-6 mb-0">
                Quality execution using advanced techniques and materials.
              </p>
              <div className="text-end">
                <p className="process-number">03</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6 z-3">
            <div className="text-center fs-1 p-md-4 p-2 bg-white">
              <i className="bi bi-houses sub-title-color"></i>
              <h4 className="fs-5 fw-bold">Delivery</h4>
              <p className="text-body-secondary fs-6 mb-0">
                Finally on-time handover with complete quality assurance.
              </p>
              <div className="text-end">
                <p className="process-number">04</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
