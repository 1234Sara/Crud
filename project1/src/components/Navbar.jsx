import { Link } from "react-router-dom";

export default function Navbar() {
    
    return(
        // <nav>
        //     <ul>
        //         <li>Home</li>
        //         <li>About</li>
        //         <li>Contact</li>
        //     </ul>
        // </nav>
        
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/TV">TV</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}


// We make Link instead of href as href make refresh to the page & we import the Link from react router dom & take to as props.
