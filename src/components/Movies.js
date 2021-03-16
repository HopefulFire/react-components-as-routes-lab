import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieLis = movies.map((movie) => {
    let genreLis = movie.genres.map((genre) => {
      return (
        <li key={genre}>{genre}</li>
      )
    })
    return (
      <div key={movie.title}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <h4>Genres:</h4>
        <ul>
          {genreLis}
        </ul>
      </div>
    )
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {movieLis}
    </div>
  );
};

export default Movies;
