import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
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

export default MoviesList;
