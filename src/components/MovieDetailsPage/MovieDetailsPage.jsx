import { Component } from "react";
import { getMovieDetails } from "../../moviesApi.js";
import "./MovieDetailsPage.css";

class MovieDetailsPage extends Component {
  state = {
    movieId: this.props.id,
  };

  componentDidMount() {
    console.log(this.state.movieId);
    getMovieDetails(this.state.movieId).then((result) => {
      this.setState({
        ...result,
      });
    });
  }


  render() {
    const { title, poster_path, vote_average, overview, genres } = this.state;

    return (
      <>
        {/* <button onClick={this.handleGoBack}>Go back</button> */}
        <div className="MovieDetailsPage">
          <img
            width="320"
            alt={title}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          />
          <div>
            <h2>{this.state.title}</h2>
            <p>Vote: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className="genres__list">
              {genres &&
                genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
