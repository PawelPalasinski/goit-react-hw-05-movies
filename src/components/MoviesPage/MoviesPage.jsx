import React from 'react';
import { useState, useEffect } from 'react';
import { getByQuery } from '../services/api';
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    console.log(name);

  return (
    <div>
    <form>
      <input
        name="query"
        type="text"
        autoComplete="off"
        placeholder="Search"
        onChange={e => setSearchParams({ name: e.target.value })}
        value={name}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
    </div>
  );

};

export default MoviesPage;