import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LngSwitcher from "@/components/lang";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3 sticky-top">
      <div className="container-fluid ">
        <a className="navbar-brand fw-bold">
          <span className="text-warning">O</span>EF :)
        </a>
        <form className="d-flex align-items-baseline">
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
            Contact
          </a>
          <a className="text-light mr-6 text-decoration-none">
            <LngSwitcher />
          </a>
        </form>
      </div>
    </nav>
  );
}
