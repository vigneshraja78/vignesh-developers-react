import userIcon from "../assets/images/usericon.png";

const Testimonials = () => {
  return (
    <section className="testiminoals section-bg-blue py-5">
      <div className="container px-md-5">
        <div className="text-center">
          <h5 className="sub-title-color">Client Testimonials</h5>
          <h2 className="fw-semibold page-h2-heading">
            What Our Clients Say
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="row text-center my-5">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <div className="d-md-flex">

                  <div className="col-md-6 p-3">
                    <div className="p-4 bg-white">
                      <ul className="list-unstyled d-inline-flex">
                        {[...Array(5)].map((_, i) => (
                          <li className="p-1" key={i}>
                            <i className="bi bi-star-fill testi-star"></i>
                          </li>
                        ))}
                      </ul>

                      <p>
                        “Excellent quality work and a highly professional team.
                        Every detail was handled perfectly, and the project was
                        delivered on time without any compromise on standards.”
                      </p>

                      <div className="d-flex justify-content-center">
                        <img
                          src={userIcon}
                          className="testi-icon"
                          alt="Rahul"
                        />
                        <div className="text-start ps-3 align-self-center">
                          <p className="fw-bold mb-0">Rahul</p>
                          <p className="mb-0">Bangalore</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 p-3">
                    <div className="p-4 bg-white">
                      <ul className="list-unstyled d-inline-flex">
                        {[...Array(5)].map((_, i) => (
                          <li className="p-1" key={i}>
                            <i className="bi bi-star-fill testi-star"></i>
                          </li>
                        ))}
                      </ul>

                      <p>
                        “Excellent quality work and a highly professional team.
                        Every detail was handled perfectly, and the project was
                        delivered on time without any compromise on standards.”
                      </p>

                      <div className="d-flex justify-content-center">
                        <img
                          src={userIcon}
                          className="testi-icon"
                          alt="Krish"
                        />
                        <div className="text-start ps-3 align-self-center">
                          <p className="fw-bold mb-0">Krish</p>
                          <p className="mb-0">Chennai</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="carousel-item">
                <div className="d-md-flex">

                  <div className="col-md-6 p-3">
                    <div className="p-4 bg-white">
                      <ul className="list-unstyled d-inline-flex">
                        {[...Array(5)].map((_, i) => (
                          <li className="p-1" key={i}>
                            <i className="bi bi-star-fill testi-star"></i>
                          </li>
                        ))}
                      </ul>

                      <p>
                        “Excellent quality work and a highly professional team.
                        Every detail was handled perfectly, and the project was
                        delivered on time without any compromise on standards.”
                      </p>

                      <div className="d-flex justify-content-center">
                        <img
                          src={userIcon}
                          className="testi-icon"
                          alt="Harish"
                        />
                        <div className="text-start ps-3 align-self-center">
                          <p className="fw-bold mb-0">Harish</p>
                          <p className="mb-0">Coimbatore</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 p-3">
                    <div className="p-4 bg-white">
                      <ul className="list-unstyled d-inline-flex">
                        {[...Array(5)].map((_, i) => (
                          <li className="p-1" key={i}>
                            <i className="bi bi-star-fill testi-star"></i>
                          </li>
                        ))}
                      </ul>

                      <p>
                        “Excellent quality work and a highly professional team.
                        Every detail was handled perfectly, and the project was
                        delivered on time without any compromise on standards.”
                      </p>

                      <div className="d-flex justify-content-center">
                        <img
                          src={userIcon}
                          className="testi-icon"
                          alt="Ramesh"
                        />
                        <div className="text-start ps-3 align-self-center">
                          <p className="fw-bold mb-0">Ramesh</p>
                          <p className="mb-0">Coimbatore</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <i className="bi bi-arrow-left fs-1 sub-title-color"></i>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <i className="bi bi-arrow-right fs-1 sub-title-color"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
