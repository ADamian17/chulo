import React from 'react';

import PaymentForm from '../../components/Payment/PaymentForm/PaymentForm'


const  Payment = props => {

  if (!props.profileData.payment) {
    return <h2>Loading...</h2>
  }

    const paymentInf = props.profileData.payment;
    // const cardNUm = props.profileData.payment.card_num
    // console.log(paymentInf.card_num)
    
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





