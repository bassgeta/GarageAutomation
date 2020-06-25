import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { GoogleLogin } from 'react-google-login'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const App = () => {
  console.log('ma kaj222111')
  const responseGoogle = res => {
    console.log('the res', res)
  }
  return (
    <AppStyled>
      <GlobalStyle />
      <GoogleLogin
        clientId={process.env.GCLIENT}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        accessType="offline"
        isSignedIn={true}
      />
    </AppStyled>
  )
}
