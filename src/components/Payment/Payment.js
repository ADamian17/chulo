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
    let card = parseInt(paymentInf.card_num)
    console.log(card)

    return (
      <>
       <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Payment Info</h5>
            <strong className="card-text">Card in File</strong>
            <p>{paymentInf.card_num}</p>
            <br />
            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModalLong">Edit</button>
            <button type="button" className="btn btn-link" onClick={props.handleDeletePayment} >delete</button>
          </div>
        </div>
        <PaymentForm currentUser={props.currentUser} handleAddPayment={props.handleAddPayment}/>
      </>
    )
} 


export default Payment;





