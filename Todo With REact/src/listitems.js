import React from 'react'

function Listitems(props){
    return (
        <p>{props.data}   
            <span className="ml-5" onClick={props.deleted} style={{cursor:'pointer'}}>
            <i class="fa fa-trash"></i>
            </span>
        </p>
    )
}
export default Listitems