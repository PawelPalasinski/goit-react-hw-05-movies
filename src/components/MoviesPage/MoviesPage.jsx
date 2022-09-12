import React from 'react';
import { useState, useEffect } from 'react';
import { getByQuery } from '../services/api';
import { useLocation, Link } from 'react-router-dom';

const MoviesPage = () => {
  const [film, setFilm] = useState(null);
  const [films, setFilms] = useState(null);

  const location = useLocation();
  const queryUrl = new URLSearchParams(location.search).get('name');

  useEffect(() => {
    if (!film) return;
    getByQuery(film).then(setFilms);
  }, [film]);

  useEffect(() => {
    if (!queryUrl) return;
    setFilm(queryUrl);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    setFilm(name);
    e.target.elements.name.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button>search</button>
      </form>
      {films && films.map(film => (
          <li key={film.id}>
            <Link
              to={{
                pathname: `/movies/${film.id}`,
                state: { params: location },
              }}
            >
              {film.title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default MoviesPage;
