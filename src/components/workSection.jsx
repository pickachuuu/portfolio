import React from 'react';
import Dino from '../images/1.png';
import Pong from '../images/2.png';
import Pongbat from '../images/3.png';

const WorkSection = () => {
  return (
    <div className="container-fluid py-5 bg-dark text-light" id="scrollspyHeading3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="display-2">My Work</h2>
            <p className="lead">Explore some of my projects below.</p>
          </div>
        </div>
        <ul className="nav nav-tabs my-5">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" data-bs-toggle="tab" href="#tab1">
              GAME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#tab2">
              APPS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tab3">
              WEBSITE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
        <div className="tab-content my-4">
          <div className="tab-pane fade show active" id="tab1">
            {/* Content for tab1*/}
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-light" style={{ border: 'none' }}>
                  <a href="https://github.com/pickachuuu/OOP-Project">
                    <img src={Pongbat} className="card-img-top" alt="Placeholder" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title d-inline-block p-1">Pongbat</h5>
                    <span className="badge text-bg-warning ml-5">NEW</span>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec molestie ipsum, eget dapibus purus. Integer commodo vulputate justo nec varius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-light" style={{ border: 'none' }}>
                  <a href="https://github.com/pickachuuu/Dino">
                    <img src={Dino} className="card-img-top" alt="Placeholder" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title p-1">Dino Jump</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec molestie ipsum, eget dapibus purus. Integer commodo vulputate justo nec varius.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-light" style={{ border: 'none' }}>
                  <a href="https://github.com/pickachuuu/Pong">
                    <img src={Pong} className="card-img-top" alt="Placeholder" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title p-1">Pong</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec molestie ipsum, eget dapibus purus. Integer commodo vulputate justo nec varius.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content for tab2*/}
          <div className="tab-pane fade" id="tab2">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-dark text-light" style={{ border: 'none' }}>
                  <a href="https://github.com/pickachuuu/OOP-Project">
                    <img src={Pongbat} className="card-img-top" alt="Placeholder" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title d-inline-block p-1">Pongbat</h5>
                    <span className="badge text-bg-warning ml-5">NEW</span>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec molestie ipsum, eget dapibus purus. Integer commodo vulputate justo nec varius.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab3">
            {/* Content for tab3 is empty */}
          </div>
        </div>
      </div>
      <div className="text-center">
        <a type="button" className="btn btn-primary btn-lg" href="https://github.com/pickachuuu">
          Full Portfolio
        </a>
      </div>
    </div>
  );
};

export default WorkSection;
