import React, { Component }  from 'react';
import {withRouter} from  'react-router-dom';
import axios from 'axios';
import Profile from '../../components/Navbar/Profile/Profile'


class ProfileContainer extends Component{

  state = {
    userData: [],
    // paymentAdded: false,
    paymentDelete: false 
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


  // handleAddPayment = (event, payment ) => {
  //   console.log('clicked!')
  //   event.preventDefault();
  //   axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`, { payment:{...this.state}}, {
  //     withCredentials: true,
  //   })
  //   .then((res) => {
  //     this.setState({
  //      paymentAdded: true,
  //      userData: payment
  //     });
  //     console.log('payment added')
  //   })
  //   .catch((err) => console.log(err))
  // };



  handleDeletePayment = ( event ) => {
    event.preventDefault()
     axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}/paymentdelete`, {
      withCredentials: true,
    })
    .then((res) => {
      this.setState({
        paymentDelete: true
      });
      console.log("payment deleted")
    })
    .catch((err) => console.log(err))
  }
  
  handleUserDelete = (event) => {
    event.preventDefault();
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
       handleUserUpdate={this.handleUserUpdate} handleUserDelete={this.handleUserDelete } 
       handleDeletePayment={this.handleDeletePayment} handleAddPayment={this.handleAddPayment}/>
      </>
    )
  }
} 


export default withRouter(ProfileContainer);