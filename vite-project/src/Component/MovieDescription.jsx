import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data';

const MovieDescription = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe 
        width="560" 
        height="315" 
        src={movie.trailerLink} 
        title={movie.title}
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;
