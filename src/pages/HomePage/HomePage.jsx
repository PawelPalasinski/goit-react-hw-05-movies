import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { getMovies } from '../../services/api';
import { useLocation } from 'react-router-dom';
import Spinner from '.././Loader/Loader';
const MoviesList = React.lazy(() => import('./Components/HomePageList'));

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, []);

  return (
    <ul>
      Trending today
      <Suspense fallback={<Spinner />}>
        <MoviesList movies={movies} location={location} />
      </Suspense>
    </ul>
  );
};

export default HomePage;
