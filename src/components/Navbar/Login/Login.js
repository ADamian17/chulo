import React, { Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

class  Login extends Component {

  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }); 
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res)
      this.props.setCurrentUser(res.data.data);
      this.props.history.push('/movies');
    })
    .catch((err) => console.log(err));
  }

  render () {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="form-signin">
              <div className="form-group">
                <label htmlFor="name">email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="Password" name="password" />
              </div>
              <button onClick={this.handleSubmit} className="btn btn-primary float-right" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    ); 
  };
};

export default withRouter(Login);