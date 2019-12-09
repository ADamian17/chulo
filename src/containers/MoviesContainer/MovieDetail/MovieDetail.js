import React from 'react';



const MovieDetail = props => {

  if (!props.movieDetail.img && !props.movieDetail.description && !props.movieDetail.title) {
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
  
  const title = props.movieDetail.title
  const img =  props.movieDetail.img
  const description =  props.movieDetail.description
    return (
      <>
      <div className="album py-5 movieHome">
        <div className="container">
        <div className="card mb-3" >
            <div className="row no-gutters">
              <div className="col-md-4">
              <img src={img} alt="img"  width="100%" height="100%"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
    ) 
}

export default MovieDetail;