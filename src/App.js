import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Routes from './config/routes';

import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
    moviesData: [],
    userData: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const movieData = await axios.get(`${process.env.REACT_APP_API_URL}/movies`, { withCredentials: true });
    const userData = await axios.get(`${process.env.REACT_APP_API_URL}/users`, { withCredentials: true });

    this.setState({
      moviesData: movieData.data.data,
      userData: userData.data.data
    })
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
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} moviesData={this.state.moviesData} userData={this.state.userData} />
      </>
    );
  }
}

export default withRouter(App);