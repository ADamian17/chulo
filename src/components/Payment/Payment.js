import React from 'react';

import PaymentForm from '../../components/Payment/PaymentForm/PaymentForm'


const  Payment = props => {

    const paymentInf = props.profileData.payment
    // const cardNUm = props.profileData.payment.card_num
    console.log(paymentInf)
    
    return (
      <>
       <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Payment Info</h5>
            <strong className="card-text">Card in File</strong>
            <p></p>
            <br />
            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModalLong">Edit</button>
            <button type="button" className="btn btn-link" onClick={props.handleDeletePayment} >delete</button>
          </div>
        </div>
        <PaymentForm currentUser={props.currentUser}/>
      </>
    )
} 


export default Payment;





