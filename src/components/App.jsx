import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
