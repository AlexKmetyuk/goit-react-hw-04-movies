import './MoviesList.css'
import MoviePreview from "../MoviePreview/MoviePreview";

const MoviesList = ({movies, location}) => {
  
      return (
        <ul className="moviesList">
          {movies && movies.map((movie) => <MoviePreview movie={movie} key={movie.id} location={location}/>)}
        </ul>
      );
  }
  export default MoviesList;