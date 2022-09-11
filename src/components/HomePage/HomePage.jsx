import { useState, useEffect } from 'react';
import { getMovies } from '../services/api';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  // console.log(movies);
  // console.log(location);

  return (
    <ul>
      Trending today
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              <p>{movie.title}</p>
                      <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="50"
          />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default HomePage;
