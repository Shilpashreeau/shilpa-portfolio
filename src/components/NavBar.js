import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav-item">Home</div>
      </Link>
      <Link to="/projects">
        <div className="nav-item">Projects</div>
      </Link>
      <Link to="/contact">
        <div className="nav-item">Contact</div>
      </Link>
    </nav>
  );
}

export default NavBar;
