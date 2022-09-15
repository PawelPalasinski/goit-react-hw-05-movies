import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getById } from '../../../services/api';
import s from './MovieDetailsList.module.css';

const MovieSearchList = () => {
  const location = useLocation();
  const [moviesId, setIdInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getById(id)
      .then(setIdInfo)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);

  return (
    <>
      {moviesId && (
        <>
          <div className={s.left}>
            <h2>
              {moviesId.title} ({moviesId.release_date.slice(0, 4)})
            </h2>
            <p>
              {Math.round((moviesId.vote_average + Number.EPSILON) * 100) / 100}
            </p>
            <img
              src={`https://image.tmdb.org/t/p/w500${moviesId.poster_path}`}
              alt={moviesId.title}
            />
          </div>

          <div className={s.right}>
            <h3>Overview:</h3>
            <p>{moviesId.overview}</p>
            <h3>Genres:</h3>
            <ul className={s.genres}>{moviesId.genres.map(genre => <li ket={genre.genre_ids}>{genre.name}</li>)}</ul>

            <Link to={`/movies/${id}/reviews`} className={s.link} state={location.state}>
              Reviews
            </Link>
            <Link to={`/movies/${id}/cast`} className={s.link} state={location.state}>
              Cast
            </Link>

            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieSearchList;
