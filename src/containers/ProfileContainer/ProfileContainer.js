import React, { Component }  from 'react';
import {withRouter} from  'react-router-dom';
import axios from 'axios';
import Profile from '../../components/Navbar/Profile/Profile'


class ProfileContainer extends Component{
  state = {
    userData: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    
    const userData = await axios.get(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`, { withCredentials: true });
    
    this.setState({
      userData: userData.data.data,
    })
  }
  
  handleUserUpdate = (event, updatedState) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`,updatedState, { withCredentials: true })
     .then(res => {
       this.setState({
          userData: updatedState
       })
     })
     .catch(err => console.log(err)) 
  }
  
  handleUserDelete = (event) => {
    event.preventDefault();
    console.log('click')
    axios.delete(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`, { withCredentials: true })
     .then(res => {
      this.props.logout()
     })
    .catch(err => console.log(err))
  }

  render () {
    const profileData = this.state.userData

    return (
      <>
       < Profile profileData={profileData} currentUser={this.props.currentUser} 
       handleUserUpdate={this.handleUserUpdate} handleUserDelete={this.handleUserDelete } />
      </>
     
     
    )
  }
} 


export default withRouter(ProfileContainer);