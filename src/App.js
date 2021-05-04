import { Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import NavBar from "./components/NavBar/NavBar";
import MovieDetailsView from "./views/MovieDetailsView";
import routes from "./routes";
import './app.css'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route
          path={`${routes.moviesPage}/:movieId`}
          component={MovieDetailsView}
        />
        <Route path={routes.moviesPage} component={MoviesView} />
        <Route component={HomeView} />
      </Switch>
    </>
  );
}

export default App;
