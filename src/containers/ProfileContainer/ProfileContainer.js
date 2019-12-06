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
  
// const updateUser = await axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`, { withCredentials: true });

  render () {
    const profileData = this.state.userData

    return (
      <>
       < Profile profileData={profileData} currentUser={this.props.currentUser}/>
      </>
     
     
    )
  }
} 


export default ProfileContainer;