import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<ProjectDisplay />} />

        <Route path="/projects/:symbol" element={<Project />} />
        <Route path="/contact" element ={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
