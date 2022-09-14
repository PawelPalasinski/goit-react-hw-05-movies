import React, { Suspense } from 'react';
import Spinner from '.././Loader/Loader';
import { Link, useLocation } from 'react-router-dom';

const MovieSearchList = React.lazy(() =>
  import('./Components/MovieSearchList')
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  return (
    <>
      <button>
        <Link to={backLink}>Back to movie list</Link>
      </button>

      <h2>Movie Details Page</h2>
      <Suspense fallback={<Spinner />}>
        <MovieSearchList />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
