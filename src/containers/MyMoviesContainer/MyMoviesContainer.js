import React, { Component }  from 'react';

import MovieCard from '../MoviesContainer/movieCard/movieCard' 


class MyMoviesContainer extends Component {

  
  render() {

   const movieDetails = this.state.moviesData.map((movie, index) => <MovieCard movie={movie} key={index} currentUser={this.props.currentUser} />)
    return (
      <>
      <section className="jumbotron text-center">
      <div className="container">
        <h1>My Movies</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
        </p>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row">
          {movieDetails}
        </div>
      </div>
    </div>
  </> 
  )
 }
}

export default MyMoviesContainer;