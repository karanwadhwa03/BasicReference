import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {subscribe } from 'redux'
import Counter from './reducer/counter'

const mystore=createStore(Counter,
  
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

mystore.subscribe(()=>console.log(mystore.getState()))

ReactDOM.render(
<Provider store={mystore}>
  <App></App>
  </Provider>
  ,document.getElementById('root')
)