import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'


import theme from "./styles/theme"
import GlobalStyle from "./styles/global"

import {SingIn} from "./pages/SingIn/SingIn.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <SingIn />
    </ThemeProvider>
  </React.StrictMode>
)
