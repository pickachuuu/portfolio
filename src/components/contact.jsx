import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid bg-custom" data-bs-spy="scroll" data-bs-target="#navbar-example2" id="Contact">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
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
            <div className="row justify-content-center">
              <div className="col-lg-5">
              <form className="form bg-dark my-5 shadow" action='https://formspree.io/f/meqyqqzb' method='POST'>
                  <h1 className='display-6 text-light text-center'>Email me</h1>
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
                  <button className='btn-submit float-end my-4'>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
                </div>
              </form>
              </div>

              <div className="col-lg-5">
                <div className='custom-cntr mt-5 shadow bg-dark'>
                  <h1 className='display-6 text-light text-center'>Socials</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
