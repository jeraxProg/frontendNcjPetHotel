import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  position: relative;
  
`

export const Sidebar = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  background: #020024;
  padding: 30px 0;
`

export const MainContent = styled.div`
  width: 100%;
  margin-left: 200px;
  border: 1px solid #e0e4e8;
`

export const MainContent2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 950px){
    display: flex;
    flex-wrap: wrap;
    
  }
`

export const SidebarH2 = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`

export const Link = styled.div`
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  padding: 15px;
`
export const ReservationHeader = styled.div`
  padding: 20px;
  background-color: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8
`

export const ListOfReservation = styled.div`
  // text-align: center;
  

  @media screen and (max-width: 950px){
    width: 100%; 
   }

   
`

export const ListOfReserve = styled.div`
  text-align: center;
  padding: 50px;
  border: 1px solid #e0e4e8;
  width: 100%;
  
  @media screen and (max-width: 950px){
    display:flex;
    justify-content: center;
    width: 100%;
   }
`

export const ButtonAddReservation = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 35px;
  background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
  border-radius: 30px;
  border: 1px solid #8F9092;
  transition: all 0.2s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;
  margin-top: 5px;
  margin-bottom:10px;

  &:hover{
    box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1;
  }

  &:active {
    box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }

  &:focus {
    box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
  }
`

export const ReservationLists = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 1100px){
    display: flex;
    justify-content: center;
   }
 
`



