import React from 'react'
import self from '../images/me.jpg';
import banner from '../images/banner.png'

const homePage = () => {
  return (
    <div className='container-fluid' data-bs-spy="scroll" data-bs-target="#navbar-example2" id='scrollspyHeading1' style={{backgroundImage: `url(${banner})`}} >
    <div className='container-lg'> 
      <div className='row'>
        <div className='col-lg-7 col-12 p-5'>
          <div className='text-fluid' style={{ marginTop: '25%' }}>
          <h1 className='display-1 animate__animated animate__fadeIn animate__delay-1s' style={{ color: 'white' }}>Hi, I Am Chris</h1>
          <h1 className='display-1 animate__animated animate__backInLeft animate__delay-2s pb-5' style={{ color: 'white' , marginBottom: '15%'}}>Game / Web Developer</h1>
          </div>
        </div>
        <div className='col-lg-5 col-12 p-5'>
        {/* <img
            src={self}
            className="rounded-circle float-end"
            alt="Rounded Image"
            style={{
                width: '100%',
                height: '65%',
                marginTop: '25%',
                borderRadius: '50%',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)', // Add a shadow
            }}
        /> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default homePage