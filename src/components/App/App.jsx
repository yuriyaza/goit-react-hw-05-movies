import { NavLink, Routes, Route } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import css from "./App.module.css";

export const App = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <section className={css.section}>
          <div className={css.container}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />

              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="/movies/:movieId/cast" element={<Cast />} />
                <Route path="/movies/:movieId/reviews" element={<Reviews />} />
              </Route>
            </Routes>
          </div>
        </section>
      </main>
    </>
  );
};
