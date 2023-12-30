import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid bg-custom" data-bs-spy="scroll" data-bs-target="#navbar-example2" id="scrollspyHeading4">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            {/* <h1 className="display-2 text-light mt-5">
              Get in Touch
            </h1> */}
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="container">
          <h1 className="display-2 text-light text-center mt-5">
              Get in Touch
              <hr></hr>
            </h1>
            <div className="row">
              <div className="col-12">
              <form className="form bg-dark my-5 shadow-lg" action='https://formspree.io/f/meqyqqzb' method='POST'>
                  <div className="flex mt-5">
                      <label>
                          <input placeholder="" type="text" className="input bg-secondary text-light" name='firstname' autoComplete='off' required/>
                          <span>First name</span>
                      </label>

                      <label>
                          <input placeholder="" type="text" className="input bg-secondary text-light" name='lastname' autoComplete='off' required/>
                          <span>Last name</span>
                      </label>
                  </div>  
                          
                  <label>
                      <input placeholder="" type="email" className="input bg-secondary text-light" name='email' autoComplete='off' required/>
                      <span>Email</span>
                  </label> 
                      
                  <label>
                      <textarea rows="3" placeholder="" className="input01 bg-secondary text-light" name='message' autoComplete='off' required></textarea>
                      <span>Message</span>
                  </label>
                  
                  <div className='col-12'>
                    <a className='btn-submit my-3 bg-dark float-end'></a>
                  </div>
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
