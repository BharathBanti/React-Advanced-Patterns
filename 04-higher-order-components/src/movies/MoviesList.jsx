import React from 'react';

function MoviesList({ data }) {
  return (
    <div>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.director}</p>
            <p>{movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
