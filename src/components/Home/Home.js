import React from 'react'
import './Home.css'

import img1 from '../Home/asset/img1.jpg'
import img2 from '../Home/asset/attactOftheClones.jpeg'

const Home = () => {
  return (
  <div className="container-fluid">  
    <main role="main">
      <div id="header-section" className="row justify-content-center align-items-center header-content p-2 myHero">
        <div className=" col-12 col-md-6 col-sm-6 col-lg-6">
          <div className="header-item">
            <div className="container header-caption">
              <div className=" text-center">
                <h1>Come home and relax</h1>
                <p>Watch thousands of shows and movies, with plans starting at $2.99/month.</p>
                <p><a className="btn btn-lg btn-dark"  href="/signup" role="button">Signup</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- Second Section
      ================================================== --> */}
      <div className="row photoSection mt-5">
        <div className="col-sm-8"><img src={img1} alt="img" className="img-fluid imgSction" height="100"/></div>
        <div className="col-sm sectionItem"><img src="http://www.gstatic.com/tv/thumb/v22vodart/35903/p35903_v_v8_bb.jpg" alt="img" className="img-fluid imgSction" /></div>
      </div>
      <div className="row photoSection2">
        <div className="col-sm sectionItem">col-sm</div>
        {/* <div className="col-sm sectionItem">col-sm</div>
        <div className="col-sm sectionItem">col-sm</div> */}
      </div>
      <div className="row photoSection3 mt-5">
        <div className="col-sm-8">col-sm-4</div>
        <div className="col-sm-4">col-sm-8</div>
      </div>

      
         
      

      <hr /> 
     <div className="row"> 
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
            <button type="button" className="btn btn-lg btn-block btn-outline-dark"  href="/signup">Sign up for free</button>
          </div>
        </div>
      </div>
    </div>
   </div>

   </main> 
  </div> 
  )
}

export default Home;