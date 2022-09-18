import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePageList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={styles.listItem}>
            <Link
              className={styles.listItemLink}
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              <p className={styles.listItemTitle}>{movie.title}</p>
              <img
                className={styles.listItemImage}
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
