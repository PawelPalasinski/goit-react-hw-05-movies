import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getById } from '../../services/api';

const MovieDetailsPage = () => {
  const [moviesId, setIdInfo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getById(id)
      .then(setIdInfo)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);

  return (
    <>
      <button>
        <Link to={backLinkHref}>Back to movie list</Link>
      </button>

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
          <p>
            User Score:{' '}
            {Math.round((moviesId.vote_average + Number.EPSILON) * 100) / 100}
          </p>
          <h3>Overview:</h3>
          <p>{moviesId.overview}</p>
          <h3>Genres</h3>
          <p>{moviesId.genres.map(genre => genre.name + ' ')}</p>

          <Link to={`/movies/${id}/reviews`} state={location.state}>
            Reviews
          </Link>
          <Link to={`/movies/${id}/cast`} state={location.state}>
            Cast
          </Link>

          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
