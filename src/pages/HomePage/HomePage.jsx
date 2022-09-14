import React, { Suspense } from 'react';
import Spinner from '.././Loader/Loader'
const MoviesList = React.lazy(() => import('./Components/HomePageList'));

const HomePage = () => {
  return (
    <ul>
      Trending today
      <Suspense fallback={<Spinner />}>
        <MoviesList />
      </Suspense>
    </ul>
  );
};

export default HomePage;
