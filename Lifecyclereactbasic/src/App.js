import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(props){
  super(props);
  console.log("isideconstructor")
  console.log("------------------")

  this.state={
    Counter:0,
    Show:true
  }
  this.increment=()=>{
    this.setState({
      Counter:this.state.Counter+1
    })
  }

  this.decrement=()=>{
    this.setState({
      Counter:this.state.Counter+1
    })
  }
  this.clicked=()=>{
    this.setState({
      Show:!this.state.Show
    })
  }

}
componentDidMount(){
  console.log("COMPONENTDIDMOUNT");
  console.log("------------------")
}

render(){
  console.log("Inside render");
  console.log("------------------")

  return(
    <div>
      <button onClick={this.clicked}>Toogle</button>
      {this.state.Show?
      <div>
      <h1>Counter  {this.state.Counter}</h1>
      <button onClick={this.increment}>ADD</button>
      <button onClick={this.decrement}>SUB</button>
      </div>:null
    }
      </div>
      
  )
}
componentDidUpdate(prevprops,prevstate,snapshot){
  console.log("DID UPDATE")
  console.log("------------------")

  
}

}
export default App;
