import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorDivs = directors.map((director) => {
    let movieLis = director.movies.map((movie) => {
      return (
        <li key={movie}>{movie}</li>
      )
    })
    return (
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <h4>Movies:</h4>
        <ul>
          {movieLis}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
