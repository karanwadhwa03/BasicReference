import React from 'react'
import './person.css'
function Person(props){

    return (
        
        
        <div className="col-lg-4 p-4 ">
        <div class="card mt-2">
            <div class="card-header">
                {props.name}
            </div>
            <div class="card-body">
        <p className="my-background">HI USING CSS</p>
    <h5 class="card-title">{props.feature}</h5>
    <input type="text" className="w-100" onChange={props.changed} ></input>
    <hr></hr>
    <button className="btn btn-danger" onClick={props.clicked}>DELETe</button>
            </div>
        </div>
        </div>

       

    )
}
export default Person