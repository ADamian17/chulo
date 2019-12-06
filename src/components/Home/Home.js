import React from 'react'


const Home = () => {
  return (
    <main role="main">
      <div id="header-section" className="row justify-content-center align-items-center header-content p-2">
        <div className=" col-12 col-md-6 col-sm-6 col-lg-6">
          <div className="header-item">
            <div className="container">
              <div className="header-caption text-center">
                <h1>Come home and relax</h1>
                <p>Watch thousands of shows and movies, with plans starting at $2.99/month.</p>
                <p><a className="btn btn-lg btn-outline-primary"  href="/signup" role="button">Signup</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- Second Section
      ================================================== --> */}
      <div className="container-fluid">
        <h1>Photo Section</h1>
        <hr className="featurette-divider" />
         <div className="row pb-5 mb-5 mr-2 ml-2">
          </div>
      </div>

      <hr /> 
     <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Pricing</h1>
       <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
     </div>
     <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>2 weeks free</li>
              <li>2 Screens included</li>
              <li>Adds are included in the free trial</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
    </div>
   </main> 
  )
}

export default Home;