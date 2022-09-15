import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from '../../HomePage/Components/HomePageList.module.css';

const MoviesPageList = ({ query, movies }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={s.listItem}>
            <Link
              to={`/movies/${movie.id}`}
              className={s.listItemLink}
              state={{ from: `/movies?name=${query}` }}
            >
              <p className={s.listItemTitle}>{movie.title}</p>
              <img
                className={s.listItemImage}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
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
