import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Feat extends React.Component{
    state={
        persons:[]
    }
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response=>{
                console.log(response.data.title)
               this.setState({
                   persons:response.data
               })
            }
        )


    }

    render(){
        var use=this.state.persons.map(person=>{
            return (
                
                <div className="col-3 p-2 border" key={person.id}> <Link to={`/${person.id}`}> {person.title} </Link></div>
                
            )
        })


        return(
            <div className="row">
                {use}
            </div>
        )
    }

}

export default Feat