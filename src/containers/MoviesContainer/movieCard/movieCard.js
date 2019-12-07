import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import axios from 'axios';

class MovieCard extends Component {
  
   state = {
     movieId: "",
     addedMovie: false, 
     getMovie: '',
   }

   
   handleClick = (event) => {
    console.log('click') 
    event.preventDefault()
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}/my_movies/${this.props.movie._id}`, { withCredentials: true })
    this.setState({
      movieId: this.props.movie._id,
      addedMovie: true,
    })
  }
  
  

  handleDetails = (event) => {
    const _id = this.props.movie._id;
    console.log(_id)
    event.preventDefault()
    axios.get((`${process.env.REACT_APP_API_URL}/movies/${_id}`, { withCredentials: true }))
    .then(res => console.log(res))
    .catch(err => console.log(`${err} para detalles no detalles`))
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
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={this.handleDetails}>Details</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(MovieCard);



