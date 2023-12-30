import React from 'react'
import banner from '../images/banner.png'

const homePage = () => {
  return (
    <div className='container-fluid' data-bs-spy="scroll" data-bs-target="#navbar-example2" id='Home' style={{backgroundImage: `url(${banner})`}} >
    <div className='container-lg mt-5 p-5'> 
      <div className='row'>
        <div className='col-lg-12 col-12 p-5 mt-5'>
          <div className='text-fluid mt-5'>
          <h1 className='display-1 animate__animated animate__fadeIn animate__delay-1s' style={{ color: 'white' }}>Hi, I Am Derek</h1>
          <h1 className='display-1 animate__animated animate__backInLeft animate__delay-2s' style={{ color: 'white' , marginBottom: '15%'}}>Aspiring full stack developer</h1>
          </div>
        </div>
        <div className='col-lg-5 col-12 p-5'>
        </div>
      </div>
    </div>
  </div>
  )
}

export default homePage