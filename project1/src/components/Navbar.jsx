import { Link, NavLink } from "react-router-dom";


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
          <NavLink className={({isActive})=> isActive ? 'nav-link text-info text-decoration-underline' : 'nav-link' } aria-current="page" to="/home">Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? 'nav-link text-info text-decoration-underline' : 'nav-link' } to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? 'nav-link text-info text-decoration-underline' : 'nav-link' } to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? 'nav-link text-info text-decoration-underline' : 'nav-link' } to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? 'nav-link text-info text-decoration-underline' : 'nav-link' } to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? 'nav-link text-info text-decoration-underline' : 'nav-link' } to="/movies">Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive ? 'nav-link text-info text-decoration-underline' : 'nav-link' } to="/TV">TV</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}


// We make Link instead of href as href make refresh to the page & we import the Link from react router dom & take to as props.

// NavLink is the same as Link but it has some styles like active class.

// We make our class active instead of bootstrap nav link by using isActive & we destruct it from props & make it as a function that takes a parameter isActive & make a condition if it is active make it as a text-info & text-decoration-underline else make it as a nav-link.
