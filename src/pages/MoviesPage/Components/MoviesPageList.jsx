import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesPageList = ({ query, movies }) => {
  return (
    <>
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

MoviesPageList.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.array,
};

export default MoviesPageList;
