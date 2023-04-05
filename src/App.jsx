import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
