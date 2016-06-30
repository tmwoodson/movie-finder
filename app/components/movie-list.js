import React from 'react';

import Movie from './movie';

const MovieList = ({movies}) => {
  const movieNodes = movies.map((movie, i) => {
    return (
      <Movie {...movie} key={i} />
    );
  });

  return (
    <div className="movie-list">
      {movieNodes}
    </div>
  );
};

export default MovieList;