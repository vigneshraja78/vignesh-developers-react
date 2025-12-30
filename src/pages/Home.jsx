import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;
