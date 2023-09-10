// components/Header.js
import Link from 'next/link';
import React from 'react';


export default function Header_section(){
  return (
    <div id="site-header" style={{backgroundColor:"#052e16"}} className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light stroke">
          <h1>
            <Link className="navbar-brand" href="/">
              EZRA BR <span className="sub-color">AGENCY</span>
            </Link>
          </h1>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-lg-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" href="/about/">
                  About
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" href="/services/">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact/">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <form action="#" method="GET" className="d-flex search-header">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                required
              />
              <button className="btn btn-style btn-secondary me-lg-3" type="submit">
                Search
              </button>
            </form> */}
          </div>
          {/* <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="mode-container">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div> */}
        </nav>
      </div>
    </div>
  );
};

