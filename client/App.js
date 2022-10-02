import { CssBaseline } from '@material-ui/core'
import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
    <div>
      <Navbar />
      <Routes />
    </div>
    </React.Fragment>
  )
}

export default App
