import React from 'react';


import UserUpdateForm from '../../../containers/ProfileContainer/UserUpdateForm/UserUpdateForm';
import Payment from '../../../components/Payment/Payment';

import './Profile.css'

const Profile = (props) => {
   const full_name = `${props.profileData.first_name} ${props.profileData.last_name}`;
   const birthDay = props.profileData.birthday;
   const email = props.profileData.email;
  
   return (
    <> 
     <div className="row align-items-center">
       <div className="col">
        <section className="jumbotron text-center mb-0">
          <div className="container mt-5">
            <h1>Manage Your Account</h1>
            <p>
            </p>
          </div>
        </section>
       </div>
     </div>
     <div className="row p-3">
      <div className="col"> 
      <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="payment-tab" data-toggle="tab" href="#payment" role="tab" aria-controls="payment" aria-selected="false">Payment</a>
        </li>
      </ul>
      <div className="row mt-5 p-5">
        <div className="col-md-10 offset-md-1">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
              <Payment profileData={props.profileData} currentUser={props.currentUser} handleDeletePayment={props.handleDeletePayment} handleAddPayment={props.handleAddPayment}/>
            </div>
            <div className="tab-pane fade show active align-items-center text-center" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="card">
                <div className="card-body profile-border">
                  <h5 className="card-title">{full_name}</h5>
                  <p className="card-text">{email}</p>
                  <p className="card-text">{birthDay}</p>
                  <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
                  {/* <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModalPay">Add Payment</button> */}
                  <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModal">Cancel Subcription</button>
                </div>
             </div>
           </div>
           <UserUpdateForm handleUserUpdate={props.handleUserUpdate}/>
           {/* <PaymentForm currentUser={props.currentUser}  handleAddPayment={props.handleAddPayment}/> */}


            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Cancel Subcription</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to Cancel your Subcription?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.handleUserDelete}>Cancel Subcription</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
   </> 
   )
}

export default Profile; 