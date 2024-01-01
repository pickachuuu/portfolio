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
              <div className="col-lg-5 col-12">
              <form className="form bg-dark my-5 shadow" action='https://formspree.io/f/meqyqqzb' method='POST'>
                  <h1 className='display-6 text-light text-center'>Message me<hr></hr></h1>
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
                  <h1 className='display-6 text-light text-center'>Socials<hr></hr></h1>
                  <div className='mx-auto'>
                  <div class="social-crd">
                    <a class="social-link2" href='https://github.com/pickachuuu'>
                      <svg viewBox="0 0 496 512" height="1em" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                        </path>
                      </svg> </a>
                    <a class="social-link3" href='linkedin.com/in/chris-derek-berbo-b81a612a4/'>
                      <svg fill="#fff" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                        </path>
                      </svg> </a>
                    <a class="social-link5" href='https://stackoverflow.com/users/23180670/pikachuuuuu'>
                      <svg viewBox="0 0 16 16" class="bi bi-stack-overflow" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"></path>
                        <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z"></path>
                      </svg>
                    </a>
                  </div>
                  </div>
                </div>
                <div className='custom-cntr mt-3 shadow bg-dark'>
                  <h1 className='display-6 text-light text-center'>Email<hr></hr></h1>
                  <div className='mx-auto email'>
                  <a className='social-link5 email'>
                  <svg style={{ color: 'white', width: '50px', height: '50px' }} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 30 30.000001" preserveAspectRatio="xMidYMid meet" version="1.0">
                    <path fill="white" d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 " fill-opacity="1" fill-rule="nonzero"></path>
                  </svg>
                  </a>
                  </div>
                  <h4 className='text-light text-center lead'>chrisderekberbo@gmail.com</h4>
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
