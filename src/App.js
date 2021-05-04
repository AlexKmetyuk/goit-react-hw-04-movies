import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import routes from "./routes";
import "./app.css";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-page" */)
);
const MovieDetailsView = lazy(() =>
  import("./views/MovieDetailsView" /* webpackChunkName: "home-page" */)
);
const MoviesView = lazy(() =>
  import("./views/MoviesView" /* webpackChunkName: "home-page" */)
);

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Suspense fallback={<div className="loader"><Loader type='Circles'/></div>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route
            path={`${routes.moviesPage}/:movieId`}
            component={MovieDetailsView}
          />
          <Route path={routes.moviesPage} component={MoviesView} />
          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
