import React from 'react';

class UserUpdateForm extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="first_name" name="first_name" value={this.state.first_name} />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="last_name" name="last_name" value={this.state.last_name} />
          </div>
          <div className="form-group">
            <label htmlFor="currentCity">Email</label>
            <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="email" name="email" value={this.state.email} />
          </div>
          <button data-dismiss="modal" onClick={(event) => this.props.handleUserUpdate(event, this.state)} type="submit" className="btn btn-success float-right">save</button> 
        </form>
      </div>
    )
  }
};

export default UserUpdateForm;