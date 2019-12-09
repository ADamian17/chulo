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

  // clearInput = () => {
  //   this.setState({
  //     first_name: '',
  //     last_name: '',
  //     email: '',
  //   })
  // }

  render() {
    return (
         <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Edit Form</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

              <form>
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="first_name" name="first_name" value={this.state.first_name} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="last_name" name="last_name" value={this.state.last_name} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="currentCity">Email</label>
                  <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="Email" name="email" value={this.state.email} required/>
                </div>
              </form>
              </div>
              <div className="modal-footer">
                <button data-dismiss="modal" onClick={(event) => this.props.handleUserUpdate(event, this.state)} type="submit" className="btn btn-primary float-right">save</button> 
              </div>
            </div>
          </div>
        </div>
    )
  }
};

export default UserUpdateForm;