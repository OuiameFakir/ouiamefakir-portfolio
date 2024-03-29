import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold">
          <span className="text-warning">O</span>EF :)
        </a>
        <form className="d-flex">
          <a className="text-light mr-6 text-decoration-none" href="#home">
            Homme
          </a>
          <a className="text-light mr-6 text-decoration-none" href="#about">
            About
          </a>
          <a className="text-light mr-6 text-decoration-none" href="#projects">
            Projects
          </a>
          <a className="text-light mr-6 text-decoration-none" href="#resume">
            Resume
          </a>
          <a className="text-light mr-6 text-decoration-none" href="#contact">
            Contact Me
          </a>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
