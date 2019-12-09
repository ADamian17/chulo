import React, { Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';


import './Login.css'


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
       <> 
      <div className="clearfix">
        
        <div className="row justify-content-center p-5">
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
        <div className="row justify-content-center mt-5 p-5 needs-validation">
          {/* <div className="col-md-4"></div> */}
          <div className="col-md-4 align-self-center">
            <h1 className="text-center mb-3">Login</h1>
            <form className="form-signin forma">
              <div className="form-group ">
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="email" name="email" maxLength="25" minLength="2" placeholder="Email" required/>
              </div>
              <div className="form-group">
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="Password" name="password" maxLength="25" minLength="2" placeholder="Password" required />
              </div>
              <button onClick={this.handleSubmit} className="btn btn-primary float-right" type="submit">Login</button>
            </form>
          </div>
        </div>

      </div> 
     </>
    ); 
  };
};

export default withRouter(Login);