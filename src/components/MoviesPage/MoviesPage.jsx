import React from 'react';
import { useState, useEffect } from 'react';
import { getByQuery } from '../../services/api';
import { useLocation, Link } from 'react-router-dom';

const MoviesPage = () => {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState(null);

  const location = useLocation();
  const queryUrl = new URLSearchParams(location.search).get('name');

  useEffect(() => {
    if (!movie) return;
    getByQuery(movie)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [movie]);

  useEffect(() => {
    if (!queryUrl) return;
    setMovie(queryUrl);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    setMovie(name);
    e.target.elements.name.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button>search</button>
      </form>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
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
