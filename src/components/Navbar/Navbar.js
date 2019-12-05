import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/welcome">Chulo</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">

              {!props.currentUser ? 
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/signup'>Signup</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
              </> : 
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={props.logout} className="nav-link" to="/welcome">Logout</NavLink>
                  </li>
                </> }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
} 

export default Navbar;

