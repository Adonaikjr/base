import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//adicionados a baixo
import GlobalStyles from './global'

import { ThemeProvider } from 'styled-components'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
          <App />
      </ThemeProvider>
  </React.StrictMode>
)
