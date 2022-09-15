import React, { Suspense } from 'react';
import Spinner from '.././Loader/Loader';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

const MovieSearchList = React.lazy(() =>
  import('./Components/MovieDetailsList')
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  return (
    <>
      <button className={s.backButton}>
        <Link className={s.btnLink} to={backLink}>Back to movie list</Link>
      </button>

      <h2 className={s.title}>Movie Details Page</h2>
      <Suspense fallback={<Spinner />}>
        <MovieSearchList />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
