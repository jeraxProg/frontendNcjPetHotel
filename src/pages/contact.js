import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { useState } from 'react';
// import Petboarding from '../components/Petboarding';
import Sidebar from '../components/Sidebar'
import ContactUs from '../components/Contact';

const ContactUspage = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  }

  return (
    
    <div>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <ContactUs/>
    <Footer/>
    </div>
  ) 
}

export default ContactUspage
