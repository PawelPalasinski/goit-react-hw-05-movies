
import React, { useState, useEffect } from 'react';
import {
    Link,
    // useLocation
} from 'react-router-dom';
import { getMovies } from '../services/api';

const HomePage = () => {

  const [movies, setMovies] = useState(null);

//   const location = useLocation();

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

console.log('movies')
    
  return (
    <>
      <h2>Trending today</h2>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                // state: { params: location },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default HomePage;