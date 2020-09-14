import React from 'react'
import {Link} from 'react-router-dom'

function Nav()
{

    return(
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ml-auto" id="navbarNav">
    <ul className="navbar-nav ml-auto">
        <Link to='/home'>
      <li className="nav-item ">

        <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
      </li>
      </Link>
      <Link to='/feat'>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      </Link>
     
      
    </ul>
  </div>
</nav>
        


    )
}

export default Nav