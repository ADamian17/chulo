import React, { Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';


import './Login.css'


class  Login extends Component {

  state = {
    email: '',
    password: '',
    error: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }); 
  };


  handleError = () => {
    if (this.state !== "" ) {
      return true
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
   if ( this.handleError() ) {
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res)
      this.props.setCurrentUser(res.data.data);
      this.props.history.push('/movies');
    })
    .catch((err) => console.log(err));
   } else {
     this.setState ({
       error: true,
     })
   }
    
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
                <input onChange={this.handleChange} className={`form-control form-control-lg ${this.state.error && 'error'}`} type="text" id="email" name="email" maxLength="25" minLength="2" placeholder="Email" required />
                { this.state.error && <p>error</p>}
              </div>
              <div className="form-group">
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="Password" name="password" maxLength="25" minLength="2" placeholder="Password" required />
                { this.state.error && <p>error</p>}
              </div>
              <button onClick={this.handleSubmit} className="btn btn-primary float-right btn-block" type="submit">Login</button>
            </form>
          </div>
        </div>

      </div> 
     </>
    ); 
  };
};

export default withRouter(Login);