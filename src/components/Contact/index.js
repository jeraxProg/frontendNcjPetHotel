import React from 'react'
import email from '../../images/email.png'
import phone from '../../images/phone.png'
import location from '../../images/location.png'

import {
  ContactPageSection,
  ContactContainer,
  ContactLeftTopContent,
  ContactContentHeading,
  ContactContentP,
  InfoP,
  ImageP,
  ContContainer
} from './ContactUsElements'

const ContactUs = () => {
  return (
    <ContactPageSection id='contact'>
      
      <ContactContainer>
      <ContactLeftTopContent>
      <ContactContentHeading>Get in touch</ContactContentHeading>
      <ContactContentP>Use our contact form for all information requests directly or let us know if you have something for us to help you.</ContactContentP>
      <ContactContentP>Feel free to get in touch with us via email or phone</ContactContentP>
       <hr/>
      </ContactLeftTopContent>
      <ContContainer>
      <ImageP src={email} alt='email'></ImageP>
      <InfoP>njcpethotelreservation@gmail.com</InfoP>
      </ContContainer>
      <ContContainer>
      <ImageP src={phone} alt='phone'></ImageP>
      <InfoP>Phone: +63 961 632 6102</InfoP>
      </ContContainer>
      <ContContainer>
      <ImageP src={location} alt='location'></ImageP>
      <InfoP>Location: D. Manila St. Pogi City</InfoP>
      </ContContainer>
      
      </ContactContainer>

    </ContactPageSection>
  )
}

export default ContactUs