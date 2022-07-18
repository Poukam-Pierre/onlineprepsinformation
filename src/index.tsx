// Made by Poukam

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
*{
  box-sizing: border-box;
}
body{
  margin:0;
  background-color: #FAF4F4;
}
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
)
