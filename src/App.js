import React from 'react'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from './globalState'
import { Dashboard } from './Components/Dashboard/Dashboard'
import  Container  from '@material-ui/core/Container' 



function App() {
  return (
    <Provider>
    <BrowserRouter>
      <Container fixed className='container'>
        <div className="App">
          <Switch>
              <Route path='/' exact>
                <Dashboard />
                
              </Route>
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
    </Provider>
  )
}

export default App
