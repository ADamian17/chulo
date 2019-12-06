import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          {!props.currentUser ?
           <>
            <Link className="navbar-brand" to="/">Chulo</Link>
            </> :
            <>
            <Link className="navbar-brand" to="/movies">Chulo</Link>
            </>}
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
                    <NavLink className="nav-link" exact to="/my_movies">myMovies</NavLink>
                  </li>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Menu
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <NavLink className="dropdown-item" to="/profile">Account</NavLink>
                      <NavLink onClick={props.logout} className="dropdown-item" to="/welcome">Logout</NavLink>
                    </div>
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

