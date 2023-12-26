import React from 'react';
import WorkSection from '../components/workSection';
import About from '../components/about';
import Contact from '../components/contact'
import Home from '../components/homePage';

const Content = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2">
        <Home/>
        <About/>
        <WorkSection/>
        <Contact/>
    </div>
  );
};

export default Content;
