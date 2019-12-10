import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from  'react-router-dom';


class Register extends Component {
  
  state = {
    first_name: '',
    last_name: '',
     email: '',
     password: '',
     password2: '',
     birthday: '',
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    }); 
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state, {
      withCredentials: true,
    })
    .then((res) => {
      this.setState({
       first_name: '',
       last_name: '',
        email: '',
        password: '',
        password2: '',
        birthday: '',
      });
      this.props.history.push('/login');
    })
    .catch((err) => console.log(err))

  };

  render() {
    return (
     
       <div className="row align-itmes-center mt-5 p-5">
        <div className="col"></div> 
        <div className="col-9"> 
        <form>
        < div className="conatainer">
          <h1 className="text-center mb-4">Sign Up</h1>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="first_name">First Name</label>
              <input  onChange={this.handleChange} className="form-control form-control-lg"
                type="text" id="first_name" name="first_name" value={this.state.first_name} required />
            </div>

            <div className="form-group col">
              <label htmlFor="last_name">Last Name</label>
              <input  onChange={this.handleChange} className="form-control form-control-lg"
                type="text" id="last_name" name="last_name" value={this.state.last_name} required />
           </div>

          </div>
          
          
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email"
              name="email" value={this.state.email} required />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="text"
              name="birthday" value={this.state.birthday} required />
          </div>
          <div className="row">
            <div className="form-group col ">
              <label htmlFor="name">Password</label>
              <input onChange={this.handleChange} className="form-control form-control-lg"
                type="password" id="password" name="password" value={this.state.password}
                required />
            </div>

            <div className="form-group col">
              <label htmlFor="password2">Confirm Password</label>
              <input onChange={this.handleChange} className="form-control form-control-lg"
                type="password" id="password2" name="password2" value={this.state.password2}
                required />
           </div>
          </div>
          
          
          <button onClick={this.handleSubmit} className="btn btn-primary float-right" type="submit">
            Register
          </button>
          </div>
         </form>
      </div>
      <div className="col"></div>
    </ div>      
    );
  }
}

export default withRouter(Register);