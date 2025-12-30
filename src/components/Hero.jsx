import slider1 from "../assets/images/slider-1.jpeg";
import slider2 from "../assets/images/slider-2.jpeg";

const HeroSlider = () => {
  return (
    <section className="hero">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption text-start bg-black bg-opacity-50 p-4">
              <h1 className="text-white hero-banner-h1">
                Building Foundations for the Future
              </h1>
              <p className="text-white">
                Residential | Commercial | Industrial Construction
              </p>
              <a href="/projects" className="text-decoration-none">
                <button className="button-bg fs-6 border-0">View Projects</button>
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption text-start bg-black bg-opacity-50 p-4">
              <h1 className="text-white hero-banner-h1">
                Building Foundations for the Future
              </h1>
              <p className="text-white">
                Residential | Commercial | Industrial Construction
              </p>
              <a href="/projects" className="text-decoration-none">
                <button className="button-bg fs-6 border-0">View Projects</button>
              </a>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
