import React from 'react';
import { Link } from 'react-router-dom';
import s from './HomePageList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={s.listItem}>
            <Link
              className={s.listItemLink}
              to={`movies/${movie.id}`}
              state={{ from: location }}
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

export default MoviesList;
