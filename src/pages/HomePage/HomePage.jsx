import React, {
  Suspense,
} from 'react';

const MoviesList = React.lazy(() => import('./Components/MoviesList'));

const HomePage = () => {
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
