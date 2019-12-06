import React, {Component} from 'react';
import axios from 'axios';

class MovieCard extends Component {
  
   state = {
     movieId: "",
     addedMovie: false, 
   }

   handleClick = () => {
    console.log('this is:');
  }
   
  render () {
    const movies = this.props.moviesDetail;
    return movies.map( function(movie, index) {
    return (
      <div  className="col-md-4" key={index}>
        <div className="card mb-4 shadow-sm">
         <img src={movie.img} alt="ima" width="100%" height="100%" />
          <div className="card-body">
            <p className="card-text">{movie.description}</p>
            <p className="card-text">{movie._id}</p>
          <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary"  onClick={(e) => this.handleClick(e)}>Add</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
  })

  }
}

export default MovieCard;



