import React from 'react'
import './Person.css'
var Person=(props)=>{
    return (
        <div className="use" >
            <h1>MY name is {props.name}</h1>
    <h2>My age is {props.age} </h2>
    <p>{props.children}</p>
        <input type="text" onChange={props.change}></input>
        <button onClick={props.delete}>DLEET</button>
        </div>
    )
}
export default Person