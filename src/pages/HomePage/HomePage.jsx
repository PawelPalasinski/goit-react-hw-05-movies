import React, { Suspense, useState, useEffect } from 'react';
import { getMovies } from '../../services/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../ui/Loader/Loader';
import styles from './HomePage.module.css';

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
    <>
      <h3>🎞 Trending today</h3>
      <ul className={styles.list}>
        <Suspense fallback={<Spinner />}>
          <MoviesList movies={movies} location={location} />
        </Suspense>
      </ul>
    </>
  );
};

export default HomePage;
