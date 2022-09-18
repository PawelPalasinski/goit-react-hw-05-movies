import React, { Suspense } from 'react';
import Spinner from '../../ui/Loader/Loader';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsList = React.lazy(() =>
  import('./Components/MovieDetailsList')
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  return (
    <>
      <button className={styles.backButton}>
        <Link className={styles.btnLink} to={backLink}>
          Back to movie list
        </Link>
      </button>

      <h3 className={styles.title}>Movie Details Page</h3>
      <div className={styles.detailsContainer}>
        <Suspense fallback={<Spinner />}>
          <MovieDetailsList />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
