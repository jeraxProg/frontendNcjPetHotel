import React, {useState} from 'react'
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection'
import { homeObjFour } from '../components/InfoSection/Data';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';

const Petboardingpage = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <InfoSection {...homeObjFour}/>
      <Footer/>
    </div>
  ) 
}

export default Petboardingpage
