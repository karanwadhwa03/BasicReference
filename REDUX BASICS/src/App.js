import React,{Component} from 'react'
import { useSelector, useDispatch } from 'react-redux'
 
function App(){
const use1=useSelector(state=>state)
const use=useDispatch();
  
     
    return(
      <div>
       <h1> Counter {use1} </h1>
      <button onClick={()=>use({type:'INC'})}>INC</button>
      </div>
    )
  }



export default App