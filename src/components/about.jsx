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
    <div className='container-fluid bg-dark' data-bs-spy="scroll" data-bs-target="#navbar-example2" id='scrollspyHeading2'>
      <div className='row'>
        <div className='col-12'>
          <div className='text-center'>
            <h1 className='display-2 mt-5' style={{ color: 'white'}}>
              About Me
              <hr></hr>
            </h1>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-lg-5 offset-lg-1  order-lg-1 order-2'>
          <div className='container text-justify text-center-md'>
            <p className='text-light lead p-1'>
              Hi, I'm Chris Derek Berbo, a second-year student at the University
              of San Carlos. I have a passion for creating games and designing
              websites, and I'm currently navigating my academic journey with
              enthusiasm. I find joy in exploring creative challenges and
              continually expanding my skills. Outside of my university studies,
              I engage in various activities that bring balance to my life.
              I leverage a diverse stack of programming languages, including C,
              Python, Java, and web technologies such as HTML, CSS, and
              JavaScript. I also have experience with backend technologies,
              utilizing PHP, Express, and SQL through tools like PHPMyAdmin. My
              front-end development is often complemented by frameworks like
              React, and I work seamlessly with tools such as Visual Studio Code
              to craft efficient and dynamic solutions.
            </p>
          </div>
          <p className='p-5 animate__delay-2s'>
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
        <div className='col-lg-6 order-lg-2 order-1'>
          <img
            src={self}
            className="rounded-circle d-block mx-auto mt-3 shadow-lg"
            alt="Rounded Image"
            style={{
              width: '60%',
              height: '60%',
              borderRadius: '60%',
            }}
          />
          </div>
      </div>
    </div>
  );
};

export default About;
