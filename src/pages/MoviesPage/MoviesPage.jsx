import React, { Suspense } from 'react';
import Spinner from '.././Loader/Loader';
import { getByQuery } from '../../services/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './MoviesPage.module.css';
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
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.inputField}
          type="text"
          value={query}
          onChange={e => setSearchParams({ name: e.target.value })}
          placeholder="Search movies"
          autoComplete="off"
        />
      </form>
      <ul className={s.list}>
        <Suspense fallback={<Spinner />}>
          <MoviesPageList query={query} movies={movies} />
        </Suspense>
      </ul>
    </>
  );
};

export default MoviesPage;
