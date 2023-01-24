import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import { useState } from 'react';
// import Petboarding from '../components/Petboarding';
import Sidebar from '../components/Sidebar'

const Servicespage = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  }

  return (
    
    <div>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <Services/>
      <Footer/>
    </div>
  ) 
}

export default Servicespage
