import React from 'react'
import { DiGithubBadge } from "react-icons/di";

const contact = () => {
  return (
    <div className='container-fluid mb-5 bg-dark-gradient' data-bs-spy="scroll" data-bs-target="#navbar-example2" id='scrollspyHeading4' >
      <div className='row'>
        <div className='col-12'>
          <div className='text-center'>
              <h1 className='display-5 text-light' style={{marginTop: '5%'}}>Get in Touch</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-6'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-2 col-12 offset-lg-4'>
                  <div className='text-light mt-5'>LinkedIn</div>
                </div>
                <div className='col-lg-2 col-12 offset-2'>
                  <div className='text-light mt-5'>Github</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-2 offset-4'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact  