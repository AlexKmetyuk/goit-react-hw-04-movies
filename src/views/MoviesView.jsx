import { Component } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchForm from "../components/SearchForm/SearchForm";
import { searchMoviesByQuery } from "../moviesApi.js";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const queryString = require("query-string");



class MoviesView extends Component {
  state = {
    query: '',
    movies: null,
    showLoader: false
  };

  componentDidMount() {
    const querySearch = queryString.parse(this.props.location.search);

    if (querySearch.query) {
      this.setState({ query: querySearch.query });
      if (this.state.query) {
        this.searchMovies();
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query && query !== "") {
      this.searchMovies();
      this.props.history.push({ search: `query=${this.state.query}` });
    }
  }

  onSubmit = (query) => {
    this.setState({
      query: query,
    });
  };

  searchMovies() {
    const { query } = this.state;
this.setState({showLoader: true})
    searchMoviesByQuery(query).then((movies) => {
      this.setState({
        movies: movies.results,
      });
    }).finally(this.setState({showLoader: false}));
  }

  render() {
    const { movies, query, showLoader } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} query={query} />

        {!showLoader ? (
          <MoviesList
            movies={movies}
            location={`${this.props.location.pathname}${this.props.location.search}`}
          />
        ) : (
          <div className='loader'><Loader type="Circles" /></div>
        )}
      </>
    );
  }
}

export default MoviesView;
