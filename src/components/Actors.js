import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorDivs = actors.map((actor) => {
    let movieLis = actor.movies.map((movie) => {
      return (
        <li key={movie}>{movie}</li>
      )
    })
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <h4>Movies:</h4>
        <ul>
          {movieLis}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;
