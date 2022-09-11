import { useState, useEffect } from 'react';
import { getMovies } from '../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  console.log(movies);

  return (
    <ul>
      Trending today
      {movies && movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
    </ul>
  )
}

export default HomePage;