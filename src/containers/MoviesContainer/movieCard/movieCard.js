import React from 'react';

const MovieCard = (props) => {
  const movies = props.moviesDetail;
    return movies.map( function(movie, index) {
    return (
      <div  className="col-md-4" key={index}>
        <div className="card mb-4 shadow-sm">
         <img src={movie.img} alt="ima" width="100%" height="100%" />
          <div className="card-body">
            <p className="card-text">{movie.description}</p>
          <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">Add</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
  })
}

export default MovieCard;



