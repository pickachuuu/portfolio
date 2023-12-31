import React from 'react';

const Navbar = () => {
  
  return (
    <nav id="navbar-example2" className="navbar navbar-expand-lg bg-body-tertiary fixed-top"  data-bs-theme="dark"  style={{background: "#351c75"}}>
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Derek Berbo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Portfolio">
              Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
