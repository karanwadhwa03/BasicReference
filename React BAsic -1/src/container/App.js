import React,{Component}from 'react';
import Header from '../component/header/header'
import Person from '../component/person/person'
import './App.css';
import Footer from '../component/footr/footer'
class App extends Component{
state={
  persons:[
    {id:1,name:'karan',feature:'He is good'},
    {id:2,name:'karan2',feature:'He is good'},
    {id:3,name:'karan3',feature:'He is good'},
    {id:4,name:'karan4',feature:'He is good'},
    {id:5,name:'karan5',feature:'He is good'}
  ],
  show:true
}
clickedHandler=(id)=>{
console.log(id);
var use=this.state.persons.slice();
var index=use.findIndex(el=>
  {
    return el.id===id;
  }
)
use.splice(index,1);

this.setState({
  persons:use
})
}
show =()=>{
  var use=this.state.show;
  this.setState({
    show:!use
  })

}
changedHandler=(event,id)=>{
var use1=this.state.persons.slice();
var index2=use1.findIndex(el=>{
  return el.id===id;
})
use1[index2].feature=event.target.value;
this.setState({
  persons:use1
})

}

render(){
if(this.state.show){
var Persons=this.state.persons.map(el=>{
 return( <Person name={el.name} feature={el.feature}  key={el.id} clicked={()=>this.clickedHandler(el.id)}  changed={(event)=>this.changedHandler(event,el.id)}></Person>)
})
}
else
{
  var Persons=null;
}

  return (
    <div >
      <Header/>
      <div className="text-center mt-3">
      <button onClick={this.show} className="btn btn-success "> SHOW</button>
      </div>
      <div className="row"> {Persons}</div>
      
      <Footer></Footer>
    </div>
  )
}

  
}


export default App;
