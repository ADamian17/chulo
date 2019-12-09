import React, {Component} from 'react';
import { withRouter, Link} from 'react-router-dom';
import axios from 'axios';

import MovieDetail from '../MovieDetail/MovieDetail'

import './movieCard.css'
class MovieCard extends Component {
  
   state = {
     movieId: "",
     addedMovie: false, 
     movieDetails: {},
     selectedMovie: ''
   }

  //  Add movie
   handleClick = (event) => {
    console.log('click') 
    event.preventDefault()
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}/my_movies/${this.props.movie._id}`, { withCredentials: true })
    this.setState({
      movieId: this.props.movie._id,
      addedMovie: true,
    })
  }
  
  
  // Movie details
  handleDetails = (event) => {
    event.preventDefault()
    axios.get(`${process.env.REACT_APP_API_URL}/movies/${this.props.movie._id}`, { withCredentials: true })
    .then(res => {
      this.setState({
        movieDetails: res.data.data,
        selectedMovie: res.data.data._id
      })
      console.log(res)
    })
    .catch(err => console.log(`${err} para detalles no detalles`))
  }
   
  render () {
      
    return (
      <>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm movieCard ">
         <img src={this.props.movie.img} alt="ima" width="100%" height="100%" />
          <div className="card-body flip-card-inner">
            
            {/* <p className="card-text">{this.props.movie.description}</p> */}
            <div className="d-flex justify-content-between align-items-center"> 
            <div className="btn-group">
            <button type="button" className="btn rounded-circle btn-sm btn-outline-secondary"  onClick={this.handleClick} >Add</button>
            <button to="/moviedetail" type="button" className="btn rounded-circle btn-sm btn-outline-secondary" onClick={this.handleDetails} data-toggle="modal" data-target=".bd-example-modal-xlPro">Details</button>
          </div>
          </div>
         </div>
       </div>
     </div>


     {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenterPro">
        Launch demo modal
      </button> */}

      {/* <!-- Modal --> */}

        <div className="modal fade bd-example-modal-xlPro" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
            < MovieDetail  movieDetail={this.state.movieDetails}/>
            </div>
          </div>
        </div>
    </>
    )
  }
}

export default withRouter(MovieCard);



