import React from 'react';

function MoviesList({ data }) {
  return (
    <div>
      <h2>📋Movies List</h2>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>
            <p>Title: {movie.title}</p>
            <p>Director: {movie.director}</p>
            <p>Released on: {movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
