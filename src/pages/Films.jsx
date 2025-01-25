import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmCard from '../components/FilmCard';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}/films`)
      .then(response => setFilms(response.data.data))
      .catch(error => console.error('Error fetching films:', error));
  }, []);

  return (
    <div className="film-grid">
      {films.map(film => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default Films;
