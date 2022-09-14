import React, {
  // useState, useEffect,
  Suspense
} from 'react';
// import { getMovies } from '../../services/api';
// import { Link, useLocation } from 'react-router-dom';
// import { MoviesList } from './MoviesList';

const MoviesList = React.lazy(() => import('./MoviesList'));


const HomePage = ({children}) => {


  return (
    <ul>
      Trending today
            <Suspense fallback={<div>Loading...</div>}>
      <MoviesList />
          </Suspense>
    </ul>
  );
};

export default HomePage;
