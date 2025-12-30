import about1 from "../assets/images/about-1.jpg";
import about2 from "../assets/images/about-2.jpg";
import Counter from "./Counter";

const About = () => {
  return (
    <section className="about m-lg-5 p-md-5">
      <div className="container px-lg-5 d-lg-flex align-items-center">

        <div className="col-lg-6 col-12 p-3">
          <h5 className="sub-title-color">Who We Are</h5>
          <h2 className="fw-semibold page-h2-heading">
            Trusted Construction Experts
          </h2>

          <p className="text-body-secondary lh-base">
            With over a decade of experience, we specialize in delivering reliable and cost-effective construction solutions. Our skilled team ensures quality workmanship, transparency, and customer satisfaction at every stage.
          </p>

          <ul className="p-0 about-list list-unstyled">
            <li>
              <i className="bi bi-person sub-title-color"></i>
              Skilled & Certified Professionals
            </li>
            <li>
              <i className="bi bi-alarm sub-title-color"></i>
              On-Time Project Delivery
            </li>
            <li>
              <i className="bi bi-star sub-title-color"></i>
              Premium Quality Materials
            </li>
            <li>
              <i className="bi bi-cash-coin sub-title-color"></i>
              Transparent Pricing
            </li>
          </ul>

          <button className="button-bg px-5 py-3 border">
            Learn More
          </button>
        </div>


        <div className="col-lg-6 col-12 p-2 position-relative about-image-wrapper">

          <img
            src={about1}
            className="w-100 rounded-2 border about-main-img"
            alt="About"
          />

          <div className="d-md-flex about-img-sec-section">

            <div className="col-md-4 icon-bg-org text-white text-center about-counter-box">
              <Counter target={15} />
              <p className="fs-17 text-white mb-0">
                Years of Experience
              </p>
            </div>

            <div className="col-md-8">
              <img
                src={about2}
                className="w-100 about-img-border"
                alt="About second"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
