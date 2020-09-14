import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component{
  state={
    persons:[
      {id:1,name:"karan" ,age:12},
      {id:2,name:"karan1" ,age:12},
      {id:3,name:"karan2" ,age:12},
      {id:4,name:"karan3",age:45}
    ],
    show:false
  }
  
swtichhandler=()=>{
 let p=this.state.show;
  this.setState({
    show:!p
  })
  
}
nameHandler=()=>{
console.log("LS<")

}

changeHandler=(event,id)=>{
 const personindex=this.state.persons.findIndex(
   (p)=>{
     return p.id===id
   }
 )
 const person={...this.state.persons[personindex]};
 person.name=event.target.value;
 const persons=[...this.state.persons];
 persons[personindex]=person;
 this.setState({
   persons:persons
 })


  

}
deleteHandler=(index)=>{
let personns=this.state.persons.slice();
personns.splice(index,1);
this.setState({
  persons:personns
})

}

render(){

const style={
  backgroundColor:'blue',
  padding:'10px'

}
let persons=null;
if(this.state.show){
  style.backgroundColor='pink';
  persons=(<div>
   {this.state.persons.map((person,index)=>{
return (
  <Person name={person.name}  age={person.age}  key={person.id} delete={this.deleteHandler.bind(this,index)} change={(event)=>this.changeHandler(event,person.id)} /> 

  )


   })}
    </div>);
}
else{
  persons=null
}


return (
  
  <div >
    
  <button onClick={this.swtichhandler} style={style} > ADDD</button>
{
 persons
}  

  </div>
  

  

)


}


}


export default App;
