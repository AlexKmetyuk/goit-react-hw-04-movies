import { NavLink, Route } from "react-router-dom";
import MovieDetailsPage from "../components/MovieDetailsPage/MovieDetailsPage";
import Cast from "../components/Cast/Cast";
import Review from "..//components/Reviews/Review";
import routes from "../routes.js";

const MovieDetailsView = (props) => {
  const handleGoBack = () => {
    const { location, history } = props;
    history.push(location?.state?.from || "");
  };

  // console.log(props.location)

  return (
    <>
      <button onClick={handleGoBack}>Go back</button>
      <MovieDetailsPage props={props} id={props.match.params.movieId} />
      <div>
        <h2>Additional info</h2>

        <NavLink
          className="nav--btn"
          activeClassName="nav--btn__active"
          to={`${props.match.url}${routes.review}`}
        >
          Review
        </NavLink>
        <NavLink
          className="nav--btn"
          activeClassName="nav--btn__active"
          to={`${props.match.url}${routes.cast}`}
        >
          Cast
        </NavLink>
        <Route
          path={`${props.match.url}${routes.review}`}
          render={() => <Review id={props.match.params.movieId} />}
        />
        <Route
          path={`${props.match.url}${routes.cast}`}
          render={() => <Cast id={props.match.params.movieId} />}
        />
      </div>
    </>
  );
};

export default MovieDetailsView;
