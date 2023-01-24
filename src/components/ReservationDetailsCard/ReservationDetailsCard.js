import styled from "styled-components";
import { TrashCan } from '@styled-icons/fa-regular/TrashCan'

export const ReservationDetailsWrap = styled.div`
  
  background: #fff;
  border-radius: 4px;
  margin: 20px 10px;
  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
`
export const ReservationDetailsH4 = styled.h4`
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #010101;
`

export const ReservationDetailsP = styled.p`
margin: 0;
font-size: 0.9em;
color: #555;
`

export const ReservationDetailSpan = styled(TrashCan)`
  color: #010101;
  width: 20px;
  cursor: pointer;
`





