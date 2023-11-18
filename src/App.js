import About from "./components/About";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import { Work } from "./components/work";

function App() {
  return (
    <div >
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
            </div>
  );
}

export default App;
