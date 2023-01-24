import React from 'react'
import { useState } from "react"
import {useLogin} from '../../hooks/useLogin'
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, FormLabelError, } from './LoginAdminElements'

const LoginAdmin = () => {

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }


  return (
    <>
    <Container>
      <FormWrap>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1>Sign In</FormH1>

              <FormLabel htmlFor='for'>Email:</FormLabel>
              <FormInput 
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} 
              />

              <FormLabel htmlFor='for'>Password:</FormLabel>
              <FormInput 
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              />
              
              <FormButton disabled={isLoading}>Login</FormButton>
            {error && <FormLabelError>{error}</FormLabelError>}

          </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </>
  )
}

export default LoginAdmin
