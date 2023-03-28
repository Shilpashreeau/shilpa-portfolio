import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProjectDisplay from "./pages/ProjectDisplay";
import Projects from "./pages/Projects";
import { data } from "./data/data";
console.log(data);
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects projectData={data} />} />

        <Route path="/project/:id" element={<ProjectDisplay  />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
