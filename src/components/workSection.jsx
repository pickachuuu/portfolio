import React from 'react';
import Dino from '../images/1.png';
import Pong from '../images/2.png';
import Pongbat from '../images/3.png';
import Pycal from '../images/4.png';
import Rental from '../images/5.png';

const WorkSection = () => {
  return (
    <div className="container-fluid py-5 bg-custom1 text-light" id="Portfolio">
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
            <a className="nav-link" data-bs-toggle="tab" href="#tab3">
              WEBSITE
            </a>
          </li>
        </ul>
        <div className="tab-content my-4">
          <div className="tab-pane fade show active" id="tab1">
            {/* Content for tab1*/}
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-black text-light" style={{ border: 'none' }}>
                  <a href="https://github.com/pickachuuu/OOP-Project">
                    <img src={Pongbat} className="card-img-top cardImg" alt="Placeholder" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title d-inline-block p-1">Pongbat</h5>
                    <span className="badge text-bg-warning ml-5">NEW</span>
                    <p className="card-text">
                      Created a foundational Pong game, enhancing it with characters and a health-based gameplay mechanic. Implemented using the Pygame library in Python.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-black text-light" style={{ border: 'none' }}>
                  <a href="https://github.com/pickachuuu/Dino">
                    <img src={Dino} className="card-img-top cardImg" alt="Placeholder" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title p-1">Dino Jump</h5>
                    <p className="card-text">
                      Derived inspiration from the Chrome Dino Jump game and crafted a similar game using Pygame and Python.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card bg-black text-light" style={{ border: 'none' }}>
                  <a href="https://github.com/pickachuuu/Pong">
                    <img src={Pong} className="card-img-top cardImg" alt="Placeholder" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title p-1">Pong</h5>
                    <p className="card-text">
                      Revitalized the classic Pong game by developing a remake using Pygame and Python.
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
                <div className="card bg-black text-light" style={{ border: 'none' }}>
                  <a href="https://github.com/pickachuuu/Calculator">
                    <img src={Pycal} className="card-img-top cardImg" alt="Placeholder"/>
                  </a>
                  <div className="card-body">
                    <h5 className="card-title d-inline-block p-1">Pycal</h5>
                    <p className="card-text">
                      Crafted a straightforward calculator application using the Tkinter library in Python.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab3">
          {/* Content for tab3 is empty */}
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card bg-black text-light" style={{ border: 'none' }}>
                  <a href="">
                    <img src={Rental} className="card-img-top cardImg" alt="Placeholder"/>
                  </a>
                  <div className="card-body">
                    <h5 className="card-title d-inline-block p-1">Car Rental Website</h5>
                    <span className="badge text-bg-info ml-5">WIP</span>
                    <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{ width: '25%' }}></div>
                    </div>
                    <p className="card-text">
                      In progress: Developing a user-friendly Car Rental Website enabling account creation, login, and realistic car rental simulations.
                    </p>
                    <p className='lead'>Current progress</p>
                    <ul>
                      <li>Log-in</li> 
                      <li>Register</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a type="button" className="button" href="https://github.com/pickachuuu">
        </a>
      </div>
      
    </div>
  );
};

export default WorkSection;
