import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout} />
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout} />
      </>
    );
  }
}

export default withRouter(App);