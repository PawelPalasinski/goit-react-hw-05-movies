import React, { Suspense } from 'react';
import Spinner from '.././Loader/Loader';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

const MovieDetailsList = React.lazy(() =>
  import('./Components/MovieDetailsList')
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  return (
    <>
      <button className={s.backButton}>
        <Link className={s.btnLink} to={backLink}>
          Back to movie list
        </Link>
      </button>

      <h3 className={s.title}>Movie Details Page</h3>
      <div className={s.detailsContainer}>
        <Suspense fallback={<Spinner />}>
          <MovieDetailsList />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
