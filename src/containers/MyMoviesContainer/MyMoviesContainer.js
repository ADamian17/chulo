import React,  {Component} from 'react'
import axios from 'axios'

import MyMovieCard from '../MyMoviesContainer/MymovieCard/MyMovieCard';


class MyMoviesContainer extends Component {

  state = {
    userMovies:[],
    movieId: '',
    removeMovie: false,
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


  handleRemoveMovie = (event, id) => {
    event.preventDefault()
    let resId = id
    axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.currentUser}/my_movies/${resId}/removemovie`, { withCredentials: true })
    .then(res => {
      if (res.status === 200 ) {
        let updatedMovies = this.state.userMovies.filter( movie => movie._id !== res.data.data)
  
        this.setState({
          userMovies: updatedMovies,
        }) 
      }
    })
    .catch(err => console.log(err))
  }

  
  render () {
    const userDetails = this.state.userMovies.map((movie, index) => <MyMovieCard movie={movie} key={index} currentUser={this.props.currentUser} handleRemoveMovie={this.handleRemoveMovie}/>)
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