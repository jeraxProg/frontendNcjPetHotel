import styled from 'styled-components'
// import { Link } from 'react-router-dom'


export const Container = styled.div`
  background: #fff;
  background-size: cover;
`

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 70px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;

  @media screen and (max-width: 1050px) {
    height: 80%;
    width: 100%;
  }
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #020024;
  width: 80%;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 100px) {
    width: 100%;
  }
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 14px;
    text-align: justify;
  }

`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`

export const FormLabelError = styled.label`
  margin-bottom: 8px;
  margin-top: 60px;
  font-size: 14px;
  color: #B75B5B;
  text-align: center;
  border: 1px solid #B75B5B;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 400px) {
    padding: 5px 5px;
  }
`

export const FormButton = styled.button`
  background: #fff;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #010101;
  font-size: 20px;
  cursor: pointer;
  width: 150px;
  margin: auto auto;
`