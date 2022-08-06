import { useRef } from "react";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Tools from "../components/Tools/Tools";

function App() {
  const refs = {
    aboutRef: useRef(null),
    projectsRef: useRef(null),
    toolsRef: useRef(null),
  };
  // const toolsRef = useRef(null);

  return (
    <div className="App">
      <Header reference={refs} />
      <Banner />
      <About reference={refs.aboutRef} />
      <Projects reference={refs.projectsRef} />
      <Tools reference={refs.toolsRef} />
      <Contact />
    </div>
  );
}

export default App;
