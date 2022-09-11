import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Routes, Link, Route, Outlet } from 'react-router-dom';

import { getById, getReviews, getCasts } from '../services/api';
// import Reviews from '../Reviews/Reviews';
// import Cast from '../Cast/Cast';

const MovieDetailsPage = () => {
  const [moviesId, setIdInfo] = useState(null);
  const [moviesIdReview, setIdReview] = useState(null);
  const [moviesIdCast, setIdCast] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getById(id).then(setIdInfo);
    getReviews(id).then(setIdReview);
    getCasts(id).then(setIdCast);
  }, [id]);

  return (
    <>
      <h2>Movie Details Page</h2>

      {moviesId && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesId.poster_path}`}
            alt={moviesId.title}
            width="150"
          />
          <h2>
            {moviesId.title}({moviesId.release_date.slice(0, 4)})
          </h2>
          <h3>Overview:</h3>
          <p>{moviesId.overview}</p>
          <h3>Genres</h3>
                  <p>{moviesId.genres.map(genre => genre.name + ' ')}</p>

      <Outlet />      

        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
