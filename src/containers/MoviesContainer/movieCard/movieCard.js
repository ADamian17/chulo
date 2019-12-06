import React, {Component} from 'react';
import axios from 'axios';

class MovieCard extends Component {
  
   state = {
     movieId: "",
     addedMovie: false, 
   }

   
   handleClick = (event) => {
    event.preventDefault()
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}/my_movies/${this.props.movie._id}`, { withCredentials: true })
    this.setState({
      movieId: this.props.movie._id,
      addedMovie: true,
    })
  }
   
  render () {
    return (
      <div  className="col-md-4">
        <div className="card mb-4 shadow-sm">
         <img src={this.props.movie.img} alt="ima" width="100%" height="100%" />
          <div className="card-body">
            <p className="card-text description">{this.props.movie.description}</p>
            <p className="card-text">{'...'}</p>
          <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleClick} >Add</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MovieCard;



