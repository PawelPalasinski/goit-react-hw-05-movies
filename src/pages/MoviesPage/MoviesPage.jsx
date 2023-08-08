import React, { Suspense, useState, useEffect, useCallback } from 'react';
import { DebounceInput } from 'react-debounce-input';
import Spinner from '../../ui/Loader/Loader';
import { getByQuery } from '../../services/api';
import { useSearchParams } from 'react-router-dom';
import styles from './MoviesPage.module.css';

const MoviesPageList = React.lazy(() => import('./Components/MoviesPageList'));

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(
    async pageNumber => {
      try {
        setLoading(true);
        const newMovies = await getByQuery(query, pageNumber);
        setMovies(prevMovies => [...prevMovies, ...newMovies]);
      } catch (error) {
        console.log('Error: ' + error);
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    fetchMovies(page);
  }, [query, page, fetchMovies]);

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop === clientHeight && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleSubmit = e => {
    e.preventDefault();
    setMovies([]);
    setPage(1);
    setSearchParams({ name: query });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <DebounceInput
          className={styles.inputField}
          type="text"
          value={query}
          debounceTimeout={500}
          onChange={e => setSearchParams({ name: e.target.value })}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />
      </form>
      <ul className={styles.list}>
        <Suspense fallback={<Spinner />}>
          <MoviesPageList query={query} movies={movies} />
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

export default MoviesPage;
