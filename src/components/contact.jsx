import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

const Contact = () => {
  return (
    <div className="container-fluid bg-custom" data-bs-spy="scroll" data-bs-target="#navbar-example2" id="scrollspyHeading4">
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
        <div className="col-12 mx-auto">
          <div className="container">
            <div className="row">
              <div className="col-12">
              <form class="form bg-dark my-5 shadow-lg" action='https://formspree.io/f/meqyqqzb' method='POST'>
                  <div class="flex mt-5">
                      <label>
                          <input placeholder="" type="text" class="input bg-secondary text-light" name='firstname' autoComplete='off' required/>
                          <span>First name</span>
                      </label>

                      <label>
                          <input placeholder="" type="text" class="input bg-secondary text-light" name='lastname' autoComplete='off' required/>
                          <span>Last name</span>
                      </label>
                  </div>  
                          
                  <label>
                      <input placeholder="" type="email" class="input bg-secondary text-light" name='email' autoComplete='off' required/>
                      <span>Email</span>
                  </label> 
                      
                  <label>
                      <textarea rows="3" placeholder="" class="input01 bg-secondary text-light" name='message' autoComplete='off' required></textarea>
                      <span>Message</span>
                  </label>
                  
                  <div className='col-12'>
                    <button className='button2 my-3 float-end'>
                      <span class="text">submit</span>
                    </button>
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
