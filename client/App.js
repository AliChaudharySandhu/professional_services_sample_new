import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import { blueGrey, lightGreen } from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  root:{
    position: 'relative',
  },
  palette: {
    primary: {
    light: '#8eacbb',
    main: '#607d8b',
    dark: '#34515e',
    contrastText: '#fff',
  },
  secondary: {
    light: '#21d192',
       main: '#21d192',
       dark: '#1cb77f',
    contrastText: '#fff',
  },
    openTitle: blueGrey['400'],
    protectedTitle: lightGreen['400'],
    type: 'light'
  },

}
  
)

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
