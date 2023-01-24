import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';



import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks2,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({toggle}) => {


  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80){
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
   }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>NCJ</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem to='/' onClick={toggleHome}>
              <NavLinks2 to='/'>Home</NavLinks2>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="about"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >About</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks2 to="/services"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >Services</NavLinks2>
            </NavItem>
            <NavItem>
              <NavLinks2 to="/petboarding"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}>Pet-boarding</NavLinks2>
            </NavItem>
            <NavItem>
              <NavLinks2 to="/contact"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}>Contact Us</NavLinks2>
            </NavItem>

            
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/reserve">Reserve Now </NavBtnLink>
            
      
          </NavBtn>
          
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
