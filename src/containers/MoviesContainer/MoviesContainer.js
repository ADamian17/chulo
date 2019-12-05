import React, { Component }  from 'react';


class MoviesContainer extends Component {
  state = {
    moviesData: [],
    loaded: false,
  }


  render() {
    return (
      <>
      <h1>Movies</h1>
      </>
    )
  }
}

export default MoviesContainer;