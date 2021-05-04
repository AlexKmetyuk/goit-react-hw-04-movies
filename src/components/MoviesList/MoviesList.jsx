import './MoviesList.css'
import MoviePreview from "../MoviePreview/MoviePreview";

const MoviesList = ({movies}) => {
  
      return (
        <ul className="moviesList">
          {movies && movies.map((movie) => <MoviePreview movie={movie} key={movie.id}/>)}
        </ul>
      );
  }
  export default MoviesList;