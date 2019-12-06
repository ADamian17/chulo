import React from 'react';

import Payment from '../../../components/Payment/Payment';


const Profile = (props) => {
   const full_name = `${props.profileData.first_name} ${props.profileData.last_name}`;
   const birthDay = props.profileData.birthday;
   const email = props.profileData.email;
   const signUpDate = props.profileData.createdAt;
   return (
     <>
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
              <Payment profileData={props.profileData} currentUser={props.currentUser} />
            </div>
            <div className="tab-pane fade show active align-items-center text-center" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{full_name}</h5>
                  <p className="card-text">{email}</p>
                  <p className="card-text">{birthDay}</p>
                  <p className="card-text">{signUpDate}</p>
                  <a href="/" className="btn btn-link">edit</a>
                  <a href="/" className="btn btn-link">delete</a>
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