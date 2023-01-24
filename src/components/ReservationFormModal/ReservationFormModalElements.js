import styled from "styled-components"

export const ModalBackground = styled.div`
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 50px;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const ModalContainer = styled.div`
  width: 30%;
  margin: 50px auto;
  border-radius: 12px;
  background-color: white;
  padding: 50px 0;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.40);
`

export const TitleCloseButton = styled.div`
display: flex;
  justify-content: flex-end;
  margin-right: 40px;
`

export const Button = styled.button`
background-color: transparent;
border:none;
font-size: 20px;
cursor: pointer;

&:hover {
  color: #e7195a;
}
`

export const CreateForm = styled.form`
padding: 0 70px;
`

export const ModalFormLabel = styled.label`
display: block;
margin-top: 20px;
`

export const ModalFormInput = styled.input`
padding: 10px;
margin-top: 10px;
margin-bottom: 20px;
width: 100%;
border: 1px solid #ddd;
border-radius: 4px;
box-sizing: border-box;
display: block;
`

export const ModalFormSelect = styled.select`
padding: 10px;
margin-top: 10px;
margin-bottom: 20px;
width: 100%;
border: 1px solid #ddd;
border-radius: 4px;
box-sizing: border-box;
`

export const ButtonSubmit = styled.button`
background: #020024;
border: 0;
color: #fff;
padding: 10px;
font-family: "Poppins";
border-radius: 4px;
cursor: pointer;
margin-top: 20px;

&:hover {
  background: #020050;
}
`




