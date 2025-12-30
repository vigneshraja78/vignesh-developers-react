import Counter from "./Counter";

const Stats = () => {
  return (
    <section className="counter-number section-bg-blue py-5">
      <div className="container px-md-5">
        <div className="text-center">
          <h5 className="sub-title-color">Our STATS</h5>
          <h2 className="fw-semibold page-h2-heading">ACHIEVEMENTS</h2>
        </div>

        <div className="row text-center my-5">

          <div className="col-md-3 col-12 mb-4">
            <div className="d-flex justify-content-center mb-3">
              <i className="bi bi-building fs-2 px-4 py-3 rounded-circle text-white icon-bg-org"></i>
            </div>
            <Counter target={250} />
            <p className="fs-17 text-body-secondary mb-0">
              Projects Completed
            </p>
          </div>

          <div className="col-md-3 col-12 mb-4">
            <div className="d-flex justify-content-center mb-3">
              <i className="bi bi-emoji-smile fs-2 px-4 py-3 rounded-circle text-white icon-bg-org"></i>
            </div>
            <Counter target={200} />
            <p className="fs-17 text-body-secondary mb-0">
              Happy Clients
            </p>
          </div>

          <div className="col-md-3 col-12 mb-4">
            <div className="d-flex justify-content-center mb-3">
              <i className="bi bi-star fs-2 px-4 py-3 rounded-circle text-white icon-bg-org"></i>
            </div>
            <Counter target={15} />
            <p className="fs-17 text-body-secondary mb-0">
              Years of Experience
            </p>
          </div>

          <div className="col-md-3 col-12 mb-4">
            <div className="d-flex justify-content-center mb-3">
              <i className="bi bi-person-check fs-2 px-4 py-3 rounded-circle text-white icon-bg-org"></i>
            </div>
            <Counter target={70} />
            <p className="fs-17 text-body-secondary mb-0">
              Skilled Workers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
