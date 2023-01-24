import { useReservationsContext } from '../../hooks/useReservationsContext'
import {  useState } from 'react'
import  {useAuthContext} from '../../hooks/useAuthContext'
import { ReservationDetailsWrap, ReservationDetailsH4, ReservationDetailsP, ReservationDetailSpan  } from '../ReservationDetailsCard/ReservationDetailsCard'
//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import EditReservationForm from './editReservationForm'

const ReservationDetails = ({ reservation }) => {
  const { dispatch } = useReservationsContext()
  const { user } = useAuthContext()

  
  const [openModal, setOpenModal] = useState(false);

  const handleClick = async () => {
    if (!user) {
      return
    }
    const response = await fetch(`/api/reservations/${reservation._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_RESERVATIONS', payload: json})
    }

  }

  
  

  return (
    <ReservationDetailsWrap>
        {openModal && <EditReservationForm closeModal={setOpenModal} />}
        
        <ReservationDetailsH4>Referrence ID: {reservation._id}</ReservationDetailsH4>
        <ReservationDetailsH4>Petname: {reservation.petname}</ReservationDetailsH4> 
        <ReservationDetailsP>Type Of Pet: {reservation.typeOfPet}</ReservationDetailsP>
        <ReservationDetailsP>Breed: {reservation.breed}</ReservationDetailsP>
        <ReservationDetailsP>Owner: {reservation.name}</ReservationDetailsP>
        <ReservationDetailsP>Email: {reservation.email}</ReservationDetailsP>
        <ReservationDetailsP>Phone No: {reservation.phone}</ReservationDetailsP>
        <ReservationDetailsP>Size: {reservation.size}</ReservationDetailsP>
        <ReservationDetailsP>Start date: {reservation.startDate}</ReservationDetailsP>
        <ReservationDetailsP>End date:{reservation.endDate}</ReservationDetailsP>
        <ReservationDetailsP>{formatDistanceToNow(new Date(reservation.createdAt), {addSuffix:true})}</ReservationDetailsP>
        <ReservationDetailSpan onClick={handleClick}>delete</ReservationDetailSpan>
        {/* <span  onClick={() => { setOpenModal(true) }} className="material-symbols-outlined edit">edit</span> */}
        
    </ReservationDetailsWrap>
  )
}

export default ReservationDetails 