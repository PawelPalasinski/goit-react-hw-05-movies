import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { getById } from '../services/api';

const MovieDetailsPage = () => {
  const [moviesId, setIdInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getById(id).then(setIdInfo);
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

          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          <Link to={`/movies/${id}/cast`}>Cast</Link>

          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
