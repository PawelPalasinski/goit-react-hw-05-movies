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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <h3>🎞 Trending today</h3>
      <ul className={styles.list}>
        <Suspense fallback={<Spinner />}>
          <MoviesList movies={movies} />
        </Suspense>
      </ul>
      {loading && <Spinner />}

      <button className={styles.scrollToTopButton} onClick={handleScrollToTop}>
        <svg
          fill="#daa520"
          width="75px"
          height="75px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5 15h4v6h6v-6h4l-7-8zM4 3h16v2H4z"></path>
          </g>
        </svg>
      </button>
    </>
  );
};

export default HomePage;
