import React from 'react';

const Navbar = () => {
  
  return (
    <nav id="navbar-example2" className="navbar navbar-expand-lg bg-body-tertiary fixed-top nav-underline"  data-bs-theme="dark"  style={{background: "#351c75"}}>
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="#">
          Derek.me
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
              <a className="nav-link active" aria-current="page" href="#scrollspyHeading1">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading3">
              Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading4">
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
