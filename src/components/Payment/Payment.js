import react from 'react';

const Payment = () => {
  
  return(
    <>
      <form className="needs-validation" novalidate="">
       <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required="" >
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">
              Name on card is required
            </div>
          </div>
          {/* <div className="col-md-6 mb-3">
            <label htmlFor="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="..." required=",..." />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div> */}
        </div>
      </form>
    </>
  )
}

export default Payment;