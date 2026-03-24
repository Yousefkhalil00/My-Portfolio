import Navbar from "./components/navbar";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Working from "./components/Working";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="bg-primary ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Working />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
