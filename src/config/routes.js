import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from '../components/Home/Home';
import Register from '../components/Navbar/Signup/Register'
import Login from '../components/Navbar/Login/Login';
import Profile from '../containers/ProfileContainer/ProfileContainer';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer';
import MyMoviesContainer from '../containers/MyMoviesContainer/MyMoviesContainer';


export default ({currentUser, setCurrentUser, logout }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Register} /> 
    <Route path="/login" render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route path="/profile" render={() => (
        <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} logout={logout}/>
      )}
    />
    <Route path="/movies" render={() => (
        <MoviesContainer currentUser={currentUser} />
      )}
    />
    <Route path="/mymovies" render={() => (
        <MyMoviesContainer currentUser={currentUser} user/>
      )}
    />
  </Switch>
)

 