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
                <h1>Come Home and Relax</h1>
                <p>Watch thousands of shows and movies, with plans starting at $2.99/month.</p>
                <p><a className="btn btn-lg btn-dark"  href="/signup" role="button">Signup</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Second Section
      ================================================== --> */}
      <div className="row underHero align-items-center">
        <div className="col text-center">
          <span className=""><a href="/#plans" className="btn btn-link">Check Plans</a></span>
        </div>
      </div>
      <div className="row photoSection">
        <div className="col-sm-8"><img src={img1} alt="img" className="img-fluid imgSction" height="100"/></div>
        <div className="col-sm sectionItem">
          <img src="http://www.gstatic.com/tv/thumb/v22vodart/35903/p35903_v_v8_bb.jpg" alt="img" className="img-fluid imgSction" />
          </div>
      </div>
      <div className="row photoSection2">
        <div className="col-sm sectionItem"><img src="https://heraldpublicist.com/wp-content/uploads/2019/09/echo/1568104097_joaquin-phoenix-joker-movie.png" alt="img" className="img-fluid imgSction" /></div>
      </div>

      <div className="row photoSection3">
        <div className="col-sm-6">
         <img src="https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg" alt="img" className="img-fluid imgSction" />
        </div>
        <div className="col-sm-6">
         <img src="http://www.gstatic.com/tv/thumb/v22vodart/11724/p11724_v_v8_ac.jpg" alt="img" className="img-fluid imgSction" />
        </div>
      </div>

     <div id="plans" className="row"> 
     <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Pricing</h1>
       <p className="lead">Sign up today for the best pricing available!.</p>
     </div>
     <div className="container ">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm precio">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free Trial</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$2.99 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li><b>2 weeks free</b></li>
              <li><b>2 Screens Included</b></li>
              <li><b>Commercials Included</b></li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark"  href="/signup">Sign up for free</button>
          </div>
        </div>
        <div className="card mb-4 shadow-sm precio">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Premium</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$5.99 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li><b>DVR Included</b></li>
              <li><b>4 Screens Included</b></li>
              <li><b>No Commercials</b></li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-dark"  href="/signup">Sign up for free</button>
          </div>
        </div>
      </div>
    </div>
   </div>
   </main> 
   <footer class="blog-footer text-center mb-2 p-2">
      <p>
        <a href="#">Back to top</a>
      </p>
        <p> <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
   </footer>
  </div> 
  )
}

export default Home;