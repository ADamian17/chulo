import React,  {Component} from 'react'
import axios from 'axios'

import MyMovieCard from '../MyMoviesContainer/MymovieCard/MyMovieCard';


class MyMoviesContainer extends Component {

  state = {
    userMovies:[],
    loaded: false
  }

  componentDidMount() {
    this.fetchData();
  }


  fetchData = async () => {
    const userMovies = await axios.get(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}`, { withCredentials: true }); 

    this.setState({
      userMovies: userMovies.data.data.my_movies, 
      loaded: true 
    })
  }

  
  render () {
    const userDetails = this.state.userMovies.map((movie, index) => <MyMovieCard movie={movie} key={index} currentUser={this.props.currentUser} />)
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
  
          <div className="row">
          {userDetails}
          </div>
        </div>
      </div>
    </> 
    )
  }
}


export default MyMoviesContainer;