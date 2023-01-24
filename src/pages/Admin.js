import { useEffect, useState } from 'react'
// import React, {useEffect, useState} from 'react'
import { useReservationsContext } from '../hooks/useReservationsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout';
import {
    NavBtnLink,
  } from '../components/Navbar/NavbarElements';
import ReservationDetails from '../components/Reservenow/ReservationDetails'
import ReservationForm from '../components/Reservenow/ReservationForm'
import Login from './login'
import { 
    Wrapper, 
    Sidebar, 
    MainContent, 
    SidebarH2, 
    Link,
    ReservationHeader,
    ListOfReservation,
    ListOfReserve,
    MainContent2,
    ButtonAddReservation,
    ReservationLists } 
    from '../components/AdminDashboard/AdminDashboardElements';

 
const Admin = () => {
    const { reservations, dispatch } = useReservationsContext()
    const { user } = useAuthContext()
    const { logout} = useLogout()
    const handleClick = () => {
        logout();
    
      }

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchReservations = async () => {
            const response = await fetch('api/reservations', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                // setReservations(json)
                dispatch({
                    type: 'SET_RESERVATIONS',
                    payload: json
                })

            }
        }

        if (user) {
            fetchReservations()
        }

    }, [dispatch, user])

    return (
        <>
       
        <Wrapper>
            {user && (
            <Sidebar>
            <SidebarH2>NCJ</SidebarH2>
            <ul>
            <Link><NavBtnLink to="/admin">Admin </NavBtnLink></Link>
            <Link><NavBtnLink onClick={handleClick}>Logout </NavBtnLink></Link>
            </ul>
            </Sidebar>
            )}

            <MainContent2>
            <MainContent>
            {user && (
            <ReservationHeader>Welcome to Admin Reservation</ReservationHeader>
            )}
            {user && (
            <ButtonAddReservation onClick={() => { setOpenModal(true) }}>Add Reservation</ButtonAddReservation>
            )}  {user && (<> {openModal && <ReservationForm closeModal={setOpenModal} />}
            </>
            )}

<ListOfReservation> {user && (
                <ListOfReserve>List of Reservations</ListOfReserve>
                
                )}
            {user && (
            <ReservationLists>
                {reservations && reservations.map((reservation) => (
                    <ReservationDetails key={reservation.id} reservation={reservation} />

                ))}
            </ReservationLists>
             )} 
             </ListOfReservation>
            </MainContent>
            
             </MainContent2>
            
                   
        </Wrapper>
        {!user && (
                    <Login />
                )}  
        </>

    )
};
export default Admin