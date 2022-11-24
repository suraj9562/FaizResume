import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navigator from "./components/Navigator/Navigator";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Intro />
      <Navigator />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
