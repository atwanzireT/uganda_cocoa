// components/Header.js
import Link from 'next/link';
import { useState } from 'react'; // Import useState from React

export default function Header_section() {
  const [isNavOpen, setNavOpen] = useState(false); // Create a state variable for the navigation menu

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div id="site-header mt-3" style={{ backgroundColor: "#052e16" }} className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <h1>
            <Link className="navbar-brand" href="/">
              EZRA BR <span className="sub-color">AGENCY</span>
            </Link>
          </h1>
          <button
            className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`} // Add a dynamic class based on the state
            type="button"
            onClick={toggleNav} // Add onClick event to call the toggleNav function
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}style={{ backgroundColor: "#052e16" }}  id="navbarScroll"> {/* Use the show class based on the state */}
            <ul className="navbar-nav mx-lg-auto my-0 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services/">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/impact/">
                  Impact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
