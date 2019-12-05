import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from  'react-router-dom';


class Register extends Component {
  state = {
    name: "",
    email:"",
    password: "",
    password2: "",
    birthday: ""
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
      console.log(res)
      this.setState({
        name: '',
        email: '',
        password: '',
        password2: '',
        birthday: ''
      });
      this.props.history.push('/login');
    })
    .catch((err) => console.log(err))

  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input  onChange={this.handleChange} className="form-control form-control-lg"
              type="text" id="name" name="name" value={this.state.name} required />
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
          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              onChange={this.handleChange}
              className="form-control form-control-lg"
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              onChange={this.handleChange}
              className="form-control form-control-lg"
              type="password"
              id="password2"
              name="password2"
              value={this.state.password2}
              required
            />
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary float-right" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);