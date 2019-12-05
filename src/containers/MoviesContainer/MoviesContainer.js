import React, { Component }  from 'react';

// import MovieList from '../MoviesContainer/MoviesList/MoviesList'


class MoviesContainer extends Component {

  render() {
    const movies = this.props.moviesData;
    const details = movies.map( function(movie, index) {
    return (
    <div key={index}>
      <h3 id={movie.genre}>{movie.genre}</h3>
    </div>
    )
    })

    return (
      <>
      <h1>Movies</h1>
      <h2>{details}</h2>
      
      </>
    )
  }
}

export default MoviesContainer;