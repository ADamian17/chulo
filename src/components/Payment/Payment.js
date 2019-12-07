import React from 'react';

import PaymentForm from '../../components/Payment/PaymentForm/PaymentForm'


const Payment = props => {
  const paymentInf = props.profileData.payment
  console.log(paymentInf);
  
  return (
    <>
     <div className="card">
        <div className="card-body">
          <h5 className="card-title">Payment Info</h5>
          <strong className="card-text">Card in File</strong>
           <p className="card-text">Card Num<span>{}</span></p>
          <button type="button" className="btn btn-link">add</button>
          <button type="button" className="btn btn-link">edit</button>
          <button type="button" className="btn btn-link">delete</button>
        </div>
      </div>
      <PaymentForm currentUser={props.currentUser} />
    </>
  )
}


export default Payment;





