import { Component } from "react";
import { getTrendingMovies } from "../../moviesApi.js";
import MoviesList from "../MoviesList/MoviesList";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
  componentWillUnmount() {
    this.setState({
      movies: null,
    });
  }

  render() {
    const { movies } = this.state;

    return movies ? (
      <MoviesList movies={movies} />
    ) : (
      <div className="loader">
        <Loader type="Circles" />
      </div>
    );
  }
}
export default TrendingMovies;
