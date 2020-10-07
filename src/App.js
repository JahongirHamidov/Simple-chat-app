import React from 'react'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { MyAppbar } from './Components/MyAppbar/MyAppbar'
import { Content } from './Components/Content/Content'
import {Provider} from './globalState'



function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <MyAppbar/>
          
          <Switch>
              <Route path='/' exact>
                <div className='home'>
                  chat here ...
                </div>
              </Route>
              <Route path='/chat' exact>
                <div className='home'>
                  <Content />
                </div>
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
