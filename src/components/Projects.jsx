import p1 from "../assets/images/project-1.jpg";
import p2 from "../assets/images/project-2.jpg";
import p3 from "../assets/images/project-3.jpg";
import p4 from "../assets/images/project-4.jpg";
import p5 from "../assets/images/project-5.jpg";
import p6 from "../assets/images/project-6.jpg";

const Projects = () => {
  return (
    <section className="projects py-5">
      <div className="container px-md-5">
        <div className="text-center">
          <h5 className="sub-title-color">Our Works</h5>
          <h2 className="fw-semibold page-h2-heading">Our Projects</h2>
          <p className="text-body-secondary lh-base">
            Quality Work That Speaks
          </p>
        </div>

        <div className="row mt-4">
          {[
            { img: p1, title: "Residential Villa", city: "Chennai" },
            { img: p2, title: "Commercial", city: "Coimbatore" },
            { img: p3, title: "Apartments", city: "Bangalore" },
            { img: p6, title: "Residential Villa", city: "Chennai" },
            { img: p4, title: "Commercial", city: "Coimbatore" },
            { img: p5, title: "Apartments", city: "Bangalore" },
          ].map((item, index) => (
            <div className="col-lg-4 col-md-12 p-2" key={index}>
              <div className="over-card d-flex position-relative flex-column bg-white rounded-3">

                <div className="imgContainer">
                  <img src={item.img} className="w-100" alt={item.title} />
                </div>

                <div className="card project-card mx-2">
                  <div className="d-flex justify-content-between p-5 p-lg-4 p-md-5 pt-4 px-4 align-items-end">
                    <h5 className="mb-lg-0 fw-semibold">{item.title}</h5>
                    <p className="fs-6 text-body-secondary mb-0 fw-semibold">
                      <i className="bi bi-geo-alt sub-title-color"></i>{" "}
                      {item.city}
                    </p>
                  </div>

                  <div className="content px-4">
                    <p className="text-body-secondary lh-base">
                      Completed a luxury project with modern architecture and
                      premium finishes.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 text-center">
          <p>
            <i className="bi bi-arrow-right sub-title-color"></i>{" "}
            Excellence in Work, Evident in Every Detail
          </p>
          <div className="d-flex justify-content-center">
            <button className="button-bg px-5 py-3 border">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
