import React, {Component} from 'react';
import axios from 'axios';


class PaymentForm extends Component {
  
  state = {
    first_name: '',
    last_name: '',
    card_num: '',
    exp_year: '',
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
      console.log(res)
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
              type="text" id="firstName" name="first_name" value={this.state.first_name} required />
          </div>
          <div className="col form-group">
            <label htmlFor="last_name">Last Name</label>
            <input  onChange={this.handleChange} className="form-control form-control-lg"
              type="text" id="lastName" name="last_name" value={this.state.last_name} required />
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
    //   <div>
    //   <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    //     <div className="modal-dialog modal-dialog-centered" role="document">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="exampleModalCenterTitle">Payment Form</h5>
    //           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //         </div>
    //         <div className="modal-body">
    //         <div className="container"> 
    //           <div className="row">
    //               <form onSubmit={this.handleSubmit}>
    //               <div className="row">
    //                 <div className="col form-group">
    //                   row 1
    //                     <label htmlFor="first_name">First Name</label>
    //                     <input onChange={this.handleChange} className="form-control"
    //                       type="text" id="firstName" name="first_name" value={this.state.first_name} required />
    //                   </div>
    //                   <div className="col form-group">
    //                     <label htmlFor="last_name">Last Name</label>
    //                     <input  onChange={this.handleChange} className="form-control"
    //                     type="text" id="lastName" name="last_name" value={this.state.last_name} required />
    //                 </div>
    //                 </div> 
    //                 end row 1
    //                 <div className="form-group">
    //                   <label htmlFor="card_num">card_num</label>
    //                   <input onChange={this.handleChange} className="form-control" type="text" id="card_num"
    //                     name="card_num" value={this.state.card_num} required />
    //                 </div>

    //                 row 3
    //                 <div className="row">
    //                   <div className="form-group col-sm">
    //                     <label htmlFor="exp_year">Exp Year</label>
    //                     <input onChange={this.handleChange} className="form-control" type="text" id="exp_year"
    //                       name="exp_year" value={this.state.exp_year} required/>
    //                    </div>

    //                   <div className="form-group col-sm">
    //                     <label htmlFor="name">exp Month</label>
    //                     <input onChange={this.handleChange} className="form-control"
    //                       type="text" id="exp_month" name="exp_month" value={this.state.exp_month} required/>
    //                   </div>

    //                   <div className="form-group col-sm">
    //                     <label htmlFor="code">code</label>
    //                     <input onChange={this.handleChange} className="form-control" type="password" id="code" name="code" value={this.state.code} required />
    //                   </div>
    //                 </div>
    //                 row 3 end
    //                 </form>
    //               </div> 
    //             </div> 
    //             </div>
    //            <div className="modal-footer">
    //            <button type="submit" className="btn btn-primary" data-dismiss="modal">Add</button>
    //           </div>
    //         </div>
    //     </div>
    //   </div> 
    // </div> 
    );
  }
}

export default PaymentForm;