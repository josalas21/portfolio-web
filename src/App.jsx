import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Proyects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
