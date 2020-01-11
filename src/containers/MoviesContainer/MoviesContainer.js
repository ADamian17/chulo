import React, { Component }  from 'react';
import axios from 'axios';

import './MovieContainer.css'

import MovieCard from '../MoviesContainer/movieCard/movieCard' 


class MoviesContainer extends Component {

  state = {
    moviesData: [],
    filteredData:[],
    selectedGenre: '', 
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
    const moviesData = await axios.get(`${process.env.REACT_APP_API_URL}/movies`, { withCredentials: true });
    const filteredData = await axios.get(`${process.env.REACT_APP_API_URL}/movies?${this.createFilter([this.state.selectedGenre])}`, { withCredentials: true });

    this.setState({
      moviesData: moviesData.data.data,
      filteredData: filteredData.data.data,
      loaded: true 
    })
  }

  handleChange = event => {
    if (this.state.selectedGenre === ''){
      this.setState({
        selectedGenre: event.target.value 
      }); 
    } else {
      this.setState({
        selectedGenre: "",
      })
    }
  };
  

  render() {
   const movieDetails = this.state.moviesData.map((movie, index) => <MovieCard movie={movie} key={index} currentUser={this.props.currentUser} />)
  //  const genre = this.state.filteredData.map((movie, index) => <MovieCard movie={movie} key={index} currentUser={this.props.currentUser} />)
    return (
      <>
      <section className="jumbotron text-left mb-0 mt-5 hero">
      <div className="container">
        <h1>A Movie for Everyone</h1>
        <p className="lead ">The widest variety of movies, anywhere!</p>
        <p>
        </p>
      </div>
    </section>
    <div className="album py-5 movieHome">
      <div className="container">
      {/* <div className="row text-center mb-3">
         <div className="col">
         <div className="form-check form-check-inline">
          <input className="form-check-input"  onChange={this.handleChange} type="checkbox" id="inlineCheckbox1" value="action" />
          <label className="form-check-label" htmlFor="inlineCheckbox1">Action</label>
         </div>
         <div className="form-check form-check-inline">
          <input className="form-check-input"  onChange={this.handleChange} type="checkbox" id="inlineCheckbox2" value="comedy" />
          <label className="form-check-label" htmlFor="inlineCheckbox2">Comedy</label>
        </div>
        <div className="form-check form-check-inline">  
          <input className="form-check-input"  onChange={this.handleChange} type="checkbox" id="inlineCheckbox3" value="romance" />
          <label className="form-check-label" htmlFor="inlineCheckbox3">Romance</label>
        </div>
        <div className="form-check form-check-inline">  
          <input className="form-check-input"  onChange={this.handleChange} type="checkbox" id="inlineCheckbox4" value="drama" />
          <label className="form-check-label" htmlFor="inlineCheckbox3">Drama</label>
        </div>
       </div> 
       </div> */}
        <div className="row">
          {/* { !this.props.user && this.state.selectedGenre ? genre : movieDetails } */}
          { !this.props.user && movieDetails }
        </div>
     </div> 
    </div>
  </> 
  )
 }
}

export default MoviesContainer;