import React, { Component }  from 'react';
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
    console.log('clicked')
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`,updatedState, { withCredentials: true })
     .then(res => {
       this.setState({
          userData: updatedState
       })
     })
     .catch(err => console.log(err)) 
  }

  render () {
    const profileData = this.state.userData

    return (
      <>
       < Profile profileData={profileData} currentUser={this.props.currentUser} handleUserUpdate={this.handleUserUpdate} />
      </>
     
     
    )
  }
} 


export default ProfileContainer;