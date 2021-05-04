import { Component } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchForm from "../components/SearchForm/SearchForm";
import { searchMoviesByQuery } from "../moviesApi.js";
const queryString = require('query-string')


class SearchMovies extends Component {
  state = {
    query: null,
    movies: null,
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
    searchMoviesByQuery(query).then((movies) => {
      this.setState({
        movies: movies.results,
      });
    });
  }

  render() {
    const { movies, query } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} query={query} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default SearchMovies;
