import React from 'react';
import Python from '../images/Python.png';
import Java from '../images/Java.png';
import C from '../images/C.png';
import JS from '../images/Js.png';
import CSS from '../images/Css.png';
import HTML from '../images/Html.png';
import ReactLogo from '../images/React.png';
import VSC from '../images/VSC.png';
import self from '../images/me.jpg';

const About = () => {
  return (
    <div className='container-fluid bg-custom'>
    <div className='container bg-custom' data-bs-spy="scroll" data-bs-target="#navbar-example2" id='About'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h1 className='display-2 mt-5 text-light'>
              About Me
              <hr></hr>
            </h1>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-lg-5 col-sg-12 offset-lg-1 order-lg-1 order-2 mt-5'>
          <div className='text-justify text-center-md'>
            <p className='text-light lead p-1 mx-1'>
            Hi, I'm Chris Derek Berbo, a second-year student at the University of San Carlos. Passionate about game development and web design, I navigate my academic journey with enthusiasm. Proficient in languages like C, Python, Java, and web technologies (HTML, CSS, JavaScript), I also handle backend technologies, including PHP, Express, and SQL. My front-end development involves frameworks like React, and I use tools like Visual Studio Code for crafting dynamic solutions.
            </p>
          </div>
          <div className='mb-5'>
          <p className='mt-1 mb-5 animate__delay-2s'>
            <img src={Python} alt='Python' />
            <img src={Java} alt='Java' />
            <img src={C} alt='C' />
            <img src={JS} alt='JavaScript' />
            <img src={CSS} alt='CSS' />
            <img src={HTML} alt='HTML' />
            <img src={ReactLogo} alt='React' />
            <img src={VSC} alt='Visual Studio Code' />
          </p>
          </div>
        </div>
      <div className='col-lg-4 col-12 offset-lg-1 order-lg-2 order-1 d-flex justify-content-center align-items-center'>
          <img src={self} className='avatar img-fluid shadow-lg'/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default About;

