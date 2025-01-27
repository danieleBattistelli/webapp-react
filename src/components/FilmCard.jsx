import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const FilmCard = ({ film }) => (
  <Card className="film-card">
    <Card.Img src={`${backendUrl}` + film.image} alt={`${film.title} poster`}
      className="film-poster" />
    <Card.Body>
      <Card.Title>{film.title}</Card.Title>
      <Card.Text>
        <strong>Director:</strong> {film.director} <br />
        <strong>Genre:</strong> {film.genre} <br />
        <strong>Year:</strong> {film.release_year} <br />
        {film.abstract}
      </Card.Text>
      <Link to={`/films/${film.id}`} className="btn btn-primary">
      Mostra Dettagli
      </Link>
    </Card.Body>
  </Card>

);

export default FilmCard;
