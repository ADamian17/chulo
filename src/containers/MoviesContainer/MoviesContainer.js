import React, { Component }  from 'react';
import axios from 'axios';

import MovieCard from '../MoviesContainer/movieCard/movieCard' 


class MoviesContainer extends Component {

  state = {
    moviesData: [],
    filteredData:[],
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
    const movieData = await axios.get(`${process.env.REACT_APP_API_URL}/movies`, { withCredentials: true });
    const filteredData = await axios.get(`${process.env.REACT_APP_API_URL}/movies?${this.createFilter(['Action'])}`, { withCredentials: true });
    this.setState({
      moviesData: movieData.data.data,
      filteredData: filteredData.data.data 
    })
  }
  

   

  render() {
   const moviesDetail = this.state.moviesData;
    return (
      <>
      <section className="jumbotron text-center">
      <div className="container">
        <h1>The best Movies</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
        </p>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row">
        <MovieCard moviesDetail={moviesDetail} />
        </div>
      </div>
    </div>
  </> 
  )
 }
}

export default MoviesContainer;