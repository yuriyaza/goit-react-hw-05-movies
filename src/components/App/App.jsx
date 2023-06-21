import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { NotFound } from 'components/NotFound/NotFound';
import { Spinner } from 'components/Spinner/Spinner';
import css from './App.module.css';

export const App = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/movies' >Movies</NavLink>
        </nav>
      </header>

      <main>
        <section className={css.section}>
          <div className={css.container}>
            <Routes>
              <Route path='/' element={<Home isLoading={setShowSpinner} />} />
              <Route path='/movies' element={<Movies isLoading={setShowSpinner} />} />

              <Route path='/movies/:movieId' element={<MovieDetails isLoading={setShowSpinner} />}>
                <Route path='/movies/:movieId/cast' element={<Cast isLoading={setShowSpinner} />} />
                <Route path='/movies/:movieId/reviews' element={<Reviews isLoading={setShowSpinner} />} />
              </Route>

              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </section>

        {showSpinner && <Spinner />}
      </main>
    </>
  );
};
