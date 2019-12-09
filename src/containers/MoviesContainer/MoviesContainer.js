import React, { Component }  from 'react';
import axios from 'axios';

import './MovieContainer.css'

import MovieCard from '../MoviesContainer/movieCard/movieCard' 


class MoviesContainer extends Component {

  state = {
    moviesData: [],
    filteredData:[],
    userMovies:[],
  }

  componentDidMount() {
    this.fetchData();
  }

  createFilter = (options) => {
    return options.map(genre => {
      return `&genre=${genre}`
    }).join()
  }

  fetchData = async () => {
    // Dalton helped
    const userMovies = await axios.get(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`, { withCredentials: true }); 
  
    
    const moviesData = await axios.get(`${process.env.REACT_APP_API_URL}/movies`, { withCredentials: true });
   
    const filteredData = await axios.get(`${process.env.REACT_APP_API_URL}/movies?${this.createFilter(['fantasy, action'])}`, { withCredentials: true });


    this.setState({
      moviesData: moviesData.data.data,
      userMovies: userMovies.data.data.my_movies, 
      filteredData: filteredData.data.data,
      loaded: true 
    })
  }
  
  

  render() {
   console.log(this.state.moviesData) 
   const movieDetails = this.state.moviesData.map((movie, index) => <MovieCard movie={movie} key={index} currentUser={this.props.currentUser} />)
   const userDetails = this.state.userMovies.map((movie, index) => <MovieCard movie={movie} key={index} currentUser={this.props.currentUser} />)
    return (
      <>
      <section className="jumbotron text-center mb-0 ">
      <div className="container">
        <h1>The best Movies</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
        </p>
      </div>
    </section>

    <div className="album py-5 movieHome">
      <div className="container">

        <div className="row">
          {!this.props.user && movieDetails}
          {this.props.user && userDetails}
        </div>
      </div>
    </div>
  </> 
  )
 }
}

export default MoviesContainer;