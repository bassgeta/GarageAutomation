import React from 'react'
import { RecoilRoot } from 'recoil'
import styled, { createGlobalStyle } from 'styled-components'

import { theme } from '../theme'
import { Main } from './Main'

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
  background-color: ${theme.colors.darkGray};
`
export const App = () => {
  return (
    <RecoilRoot>
      <AppStyled>
        <GlobalStyle />
        <Main />
      </AppStyled>
    </RecoilRoot>
  )
}
