import "./App.css";

import Intro from "/home/walker/Desktop/MANU/PORTFOLIO/my-app/src/Components/intro.js";
import About from "/home/walker/Desktop/MANU/PORTFOLIO/my-app/src/Components/about.js";
import Contact from "/home/walker/Desktop/MANU/PORTFOLIO/my-app/src/Components/contact.js";
import Projects from "/home/walker/Desktop/MANU/PORTFOLIO/my-app/src/Components/projects.js";
import Navbar from "/home/walker/Desktop/MANU/PORTFOLIO/my-app/src/Components/navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
