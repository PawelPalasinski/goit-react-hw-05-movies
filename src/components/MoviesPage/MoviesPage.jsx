import React from 'react';
import { useState, useEffect } from 'react';
import { getByQuery } from '../../services/api';
import {
  useLocation, Link,
  useSearchParams
} from 'react-router-dom';

const MoviesPage = () => {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("name");

  const location = useLocation();
  console.log(location.search);

  useEffect(() => {
    if (!movie) return;
    getByQuery(movie)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setMovie(query);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name={query}
        onChange={e => setSearchParams({ name: e.target.value })}/>
        <button>search</button>
      </form>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}
              state={{ from: location}}
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
