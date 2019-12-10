import React, { Component }  from 'react';
import axios from 'axios';

import './MovieContainer.css'

import MovieCard from '../MoviesContainer/movieCard/movieCard' 


class MoviesContainer extends Component {

  state = {
    moviesData: [],
    filteredData:[],
    userMovies:[],
    // showFilter:  
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
   
    const filteredData = await axios.get(`${process.env.REACT_APP_API_URL}/movies?${this.createFilter(['Crime, Action'])}`, { withCredentials: true });


    this.setState({
      moviesData: moviesData.data.data,
      userMovies: userMovies.data.data.my_movies, 
      filteredData: filteredData.data.data,
      loaded: true 
    })
  }

  

  render() {
   const movieDetails = this.state.moviesData.map((movie, index) => <MovieCard movie={movie} key={index} currentUser={this.props.currentUser} />)
   const userDetails = this.state.userMovies.map((movie, index) => <MovieCard movie={movie} key={index} currentUser={this.props.currentUser} />)
    return (
      <>
      <section className="jumbotron text-left mb-0 hero">
      <div className="container">
        <h1>A Movie for Everyone</h1>
        <p className="lead ">The widest variety of movies, anywhere!</p>
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