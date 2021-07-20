import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './components/MainPage'

const App = () => {



  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )



}

export default App
