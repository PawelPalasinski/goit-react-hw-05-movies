import React from 'react';
import { useState, useEffect } from 'react';
import { getByQuery } from '../../services/api';
import { Link, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
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
        />
      </form>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: `/movies?name=${query}` }}
            >
              <p>{movie.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="50"
              />
            </Link>
          </li>
        ))}
    </>
  );
};

export default MoviesPage;
