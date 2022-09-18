import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Reviews from './MovieDetailsPage/Components/Reviews/Reviews';
import Cast from './MovieDetailsPage/Components/Cast/Cast';
import MoviesPage from  './MoviesPage/MoviesPage'

import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="/movies/:id/cast" element={<Cast />}></Route>
          <Route path="/movies/:id/reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
