import React, {Component} from 'react';
import axios from 'axios';


class PaymentForm extends Component {
  
  state = {
    first_name: '',
    last_name: '',
    card_num: '',
    exp_day: '',
    exp_month: '',
    code: '',

  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    }); 
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`, { payment:{...this.state}}, {
      withCredentials: true,
    })
    .then((res) => {
      this.setState({
        first_name: '',
        last_name: '',
        card_num: '',
        exp_year: '',
        exp_month: '',
        code: '',
      });
    })
    .catch((err) => console.log(err))

  };

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="col form-group">
            <label htmlFor="first_name">First Name</label>
            <input onChange={this.handleChange} className="form-control form-control-lg"
              type="text" id="first_name" name="first_name" value={this.state.first_name} required />
          </div>
          <div className="col form-group">
            <label htmlFor="last_name">Last Name</label>
            <input  onChange={this.handleChange} className="form-control form-control-lg"
              type="text" id="last_name" name="last_name" value={this.state.last_name} required />
          </div>
          <div className="form-group">
            <label htmlFor="card_num">card_num</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="email"
              name="card_num" value={this.state.card_num} required />
          </div>
          <div className="form-group">
            <label htmlFor="exp_year">Exp Year</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="exp_year"
              name="exp_year" value={this.state.exp_year} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">exp Month</label>
            <input onChange={this.handleChange} className="form-control form-control-lg"
              type="text" id="exp_month" name="exp_month" value={this.state.exp_month} required/>
          </div>
          <div className="form-group">
            <label htmlFor="code">code</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="code" name="code" value={this.state.code} required />
          </div>
          <button className="btn btn-primary justify-" type="submit">submit</button>
         </form>
      </div>   
    );
  }
}

export default PaymentForm;