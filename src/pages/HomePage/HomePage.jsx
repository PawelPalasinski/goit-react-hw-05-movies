import React, { Suspense, useState, useEffect, useCallback } from 'react';
import { getMovies } from '../../services/api';
import Spinner from '../../ui/Loader/Loader';
import styles from './HomePage.module.css';

const MoviesList = React.lazy(() => import('./Components/HomePageList'));

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [firstPageFetched, setFirstPageFetched] = useState(false);

  const fetchMovies = useCallback(
    async pageNumber => {
      try {
        setLoading(true);
        const newMovies = await getMovies(pageNumber);
        setMovies(prevMovies => [...prevMovies, ...newMovies]);
        setPage(pageNumber);
        if (!firstPageFetched) {
          setFirstPageFetched(true);
        }
      } catch (error) {
        console.log('Error: ' + error);
      } finally {
        setLoading(false);
      }
    },
    [firstPageFetched]
  );

  useEffect(() => {
    if (!firstPageFetched) {
      fetchMovies(1);
    }
  }, [fetchMovies, firstPageFetched]);

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    const offset = 100;

    if (
      scrollHeight - scrollTop - offset <= clientHeight &&
      !loading &&
      window.location.pathname === '/'
    ) {
      console.log('Fetching more movies');
      const nextPage = page + 1;
      fetchMovies(nextPage);
    }
  }, [loading, page, fetchMovies]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <h3>🎞 Trending today</h3>
      <ul className={styles.list}>
        <Suspense fallback={<Spinner />}>
          <MoviesList movies={movies} />
        </Suspense>
      </ul>
      {loading && <Spinner />}
    </>
  );
};

export default HomePage;
