import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ProjectPage from "./components/ProjectPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/project-page" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
