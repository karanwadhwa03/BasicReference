import React, { Component } from 'react'
import axios from 'axios'
import { matchPath, useParams } from 'react-router';

class Detail extends Component{
    state={
        info:{}
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`).then(
            response=>{
                console.log(response.data)
               this.setState({
                   info:response.data
               })
            }
        )

       


    }

    render(){
return(
    <div>
        <h1>{this.state.info.body}</h1>
<h2>{this.state.info.id}</h2>
    </div>
)


    }



}

export default Detail