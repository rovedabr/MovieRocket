import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./Styles/theme"
import GlobalStyle from "./Styles/global"

import  {Routes}  from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
         <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
