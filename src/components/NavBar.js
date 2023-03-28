import { Link } from "react-router-dom";

function NavBar(){
return(



<nav className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/projects">
        <div>Projects</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
    </nav>
    
)

}

export default NavBar;
