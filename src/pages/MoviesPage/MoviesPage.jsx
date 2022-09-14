import React, { Suspense } from 'react';
import Spinner from '.././Loader/Loader';
import { getByQuery } from '../../services/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPageList = React.lazy(() => import('./Components/MoviesPageList'));

const MoviesPage = () => {
  // eslint-disable-next-line
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!query) return;
    getByQuery(query)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setMovie(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setSearchParams({ name: e.target.value })}
          placeholder="Search movies"
          autoComplete="off"
        />
      </form>
      <Suspense fallback={<Spinner />}>
        <MoviesPageList query={query} movies={movies} />
      </Suspense>
    </>
  );
};

export default MoviesPage;
