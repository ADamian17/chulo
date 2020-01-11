import React from 'react';

import PaymentForm from '../../components/Payment/PaymentForm/PaymentForm'

const  Payment = props => {

  if (!props.profileData.payment) {
    return (
      <div className="row align-items-center">
        <div className="col">
          <div className="spinner-border text-center" role="status">
           <span className="sr-only">Loading...</span>
         </div>
        </div>
      </div>
    )
  }
   
  // get last 4 dig
    const paymentInf = props.profileData.payment;
    let card = paymentInf.card_num.split("")
    let miNum = []; 
     for (let i = card.length -1; i >= 8; i--) {
       let lastNum = card[i]
       miNum.push(lastNum)
    }
    

    return (
      <>
       <div className="card text-center">
          <div className="card-body profile-border">
            <h5 className="card-title">Payment Info</h5>
            <strong className="card-text">Card in File</strong>
             <p>xxxx-xxxx-{miNum}</p>
            <br />
            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#paymentForm">Edit</button>
            <button type="button" className="btn btn-link" onClick={props.handleDeletePayment} >delete</button>
          </div>
        </div>
        <PaymentForm currentUser={props.currentUser} handleAddPayment={props.handleAddPayment}/>
      </>
    )
} 


export default Payment;





