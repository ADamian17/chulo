import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Routes from './config/routes';

import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  }
  
  setCurrentUser = (userId) => {
    this.setState({ 
      currentUser: userId
    });
    localStorage.setItem('uid', userId);
  }

  logout = () => {
    localStorage.removeItem('uid');
    axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
      .then(res => {
        this.setState({ currentUser: null });
        localStorage.removeItem('uid');
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout}/>
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        {/* <footer className="text-muted">
          <div className="container">
            <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap?</p>
          </div>
        </footer> */}
      </>
    );
  }
}

export default withRouter(App);