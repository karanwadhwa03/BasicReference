import React,{Component} from 'react'
import Nav from './nav'
import Home from './home'
import Feat from './feature'
import Detail from './detail'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


class App extends Component{
  render(){


    return(
      
      <Router>
      <div>
      <Nav></Nav>
      <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/feat' component={Feat}></Route>
      <Route path='/:id' component={Detail}></Route>
      </Switch>
      </div>
      </Router>
    )
  }



}
export default App