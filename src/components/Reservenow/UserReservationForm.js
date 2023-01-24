import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, FormLabelSize, DateCustom, FormSelectType} from './ReservenowElements'
import { useReservationsContext } from '../../hooks/useReservationsContext'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

const UserReservationForm = ()=> {

  const { dispatch } = useReservationsContext()

    const [petname, setPetname] = useState('')
    const [breed, setBreed] = useState('')
    const [size, setSize] = useState('')
    const [typeOfPet, setTypeOfPet] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const reservation = { petname, breed, name, email, phone, size, startDate, endDate, typeOfPet }

        const response = await fetch('/api/reservations', {
            method: 'POST',
            body: JSON.stringify(reservation),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setPetname('')
            setBreed('')
            setName('')
            setEmail('')
            setPhone('')
            setError(null)
            setEmptyFields([])
            setStartDate('')
            setEndDate('')
            alert(`New reservation added! We will send you your Referrence ID 
            on your Email! Thank You!`, json)
            dispatch({ type: 'CREATE_RESERVATIONS', payload: json })
        }
    }
  
      const [isOpen, setisOpen] = useState(false);
    
      const toggle = () => {
        setisOpen(!isOpen);
      }
      
    return ( 
      <>
      
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Container>
        <FormWrap>
          <Icon to="/"></Icon>
          <FormContent>
            <Form onSubmit={handleSubmit} >
              
              <FormH1>Make a Reservation</FormH1>
              <FormH1>Please understand that submitting an online reservation request does not guarantee your pet a spot, especially during the holidays, until you have received a confirmation email from us. Occasionally, our emails go to spam. If you have not received a response in 24 hours, please check your spam folder for an email. We are closed for drop offs and pick ups on most federal holidays. For a full list of holiday hours and closures please visit our contact page.</FormH1>
              
              {error && <div className='error'>{error}</div>}
              <FormLabel htmlFor='for'>Full Name</FormLabel>

              <FormInput type='text'
              placeholder='Full Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              id='name'
              className={emptyFields.includes('name') ? 'error' : ''}/>

              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='text'
              placeholder='E-mail'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name='email'
              id='email'
              className={emptyFields.includes('email') ? 'error' : ''}/>

              <FormLabel htmlFor='for'>Phone No:</FormLabel>
              <FormInput type='number'
              placeholder='Phone Number'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              name='phone'
              id='phone'
              className={emptyFields.includes('phone') ? 'error' : ''}/>

              <FormLabel htmlFor='for'>Pet's Name *</FormLabel>
              <FormInput type='text'
              placeholder='If you are requesting to board multiple pets, list 1. Pet, 2, Pet, Etc. '
              onChange={(e) => setPetname(e.target.value)}
              value={petname}
              id='petname'
              name='petname'
              required/>


              <FormLabel htmlFor='for'>Pet Size</FormLabel>   
              <FormLabelSize>
              <FormSelectType onChange={(e) => setSize(e.target.value)}
              required>
                <option value='' >--Please Select Size--</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
              </FormSelectType>
              </FormLabelSize>

              <FormLabel htmlFor='for'>Type of Pet</FormLabel>   
              <FormLabelSize>
              <FormSelectType onChange={(e) => setTypeOfPet(e.target.value)} >
                        <option value='' >--Type Of Pet--</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
              </FormSelectType>
              </FormLabelSize>

              <FormLabel htmlFor='for'>Pet's Breed</FormLabel>
              <FormInput type='text'
              placeholder='Breed'
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
              id='breed'
              name='breed'
              required/>

            <FormLabel for='startDate'>Start Date Reservation</FormLabel>
            <FormLabelSize>
            <DateCustom>
            <DatePicker name='startDate' id='startDate'  dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} isClearable={true}/>
            </DateCustom>
            </FormLabelSize>

            <FormLabel for='startDate'>End Date Reservation</FormLabel>
            <FormLabelSize>
            <DateCustom>
            <DatePicker name='endDate' id='endDate'  dateFormat="dd/MM/yyyy" selected={endDate} onChange={(date) => setEndDate(date)} minDate={new Date() } isClearable={true} />
            </DateCustom>
            </FormLabelSize>



              <FormButton type='submit' >Reserve Now</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer/>
    </>
    );
  }


export default UserReservationForm