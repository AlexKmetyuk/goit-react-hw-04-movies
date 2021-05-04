import { Component } from "react";
import { getTrendingMovies } from "../../moviesApi.js";
import MoviesList from '../MoviesList/MoviesList'

class TrendingMovies extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    getTrendingMovies().then((movies) =>
      this.setState({
        movies: movies.results,
      })
    );
  }
  componentWillUnmount(){
    this.setState({
      movies: null
    })
  }

  render() {
    const { movies } = this.state;

    return (
      <MoviesList movies={movies}/>
    );
  }
}
export default TrendingMovies;
