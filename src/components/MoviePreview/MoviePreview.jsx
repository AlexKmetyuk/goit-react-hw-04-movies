import { Link } from "react-router-dom";
import "./MoviePreview.css";
import routes from '../../routes.js'

const MoviePreview = ({ movie, location }) => {
  const { title, poster_path, id } = movie;
  return (
    <li className="moviePreview">
      <Link to={{pathname: `${routes.moviesPage}/${id}`, state: {from: location}}}>
        <img
          alt={title}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

export default MoviePreview;
