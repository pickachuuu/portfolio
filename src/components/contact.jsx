import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

const Contact = () => {
  return (
    <div className="container-fluid mb-5 bg-custom" data-bs-spy="scroll" data-bs-target="#navbar-example2" id="scrollspyHeading4">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h1 className="display-5 text-light" style={{ marginTop: '5%' }}>
              Get in Touch
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row">
              <div className="col-12">
                  <form className="form my-5 bg-dark">
                    <div className="title lead text-light my-3">Email me</div>
                    <input type="text" placeholder="Your email" className="input bg-dark text-light lead my-3"/>
                    <textarea placeholder="Your message" className='bg-dark text-light lead'></textarea>
                    <button type="submit" className='mt-5 button2'>Submit</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
