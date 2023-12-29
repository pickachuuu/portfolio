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
        <div className="col-12 mx-auto">
          <div className="container">
            <div className="row">
              <div className="col-12">
              <form class="form bg-dark my-5 shadow-lg" action='https://formspree.io/f/meqyqqzb' method='POST'>
                  <div class="flex">
                      <label>
                          <input required="" placeholder="" type="text" class="input bg-secondary text-light" name='firstname'/>
                          <span>First name</span>
                      </label>

                      <label>
                          <input required="" placeholder="" type="text" class="input bg-secondary text-light" name='lastname'/>
                          <span>Last name</span>
                      </label>
                  </div>  
                          
                  <label>
                      <input required="" placeholder="" type="email" class="input bg-secondary text-light" name='email'/>
                      <span>Email</span>
                  </label> 
                      
                  <label>
                      <textarea required="" rows="3" placeholder="" class="input01 bg-secondary text-light" name='message'></textarea>
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
