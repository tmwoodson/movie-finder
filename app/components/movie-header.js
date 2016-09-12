import React from 'react';

import MovieIdentifiers from './movie-identifiers';
import MovieRatings from './movie-ratings';

const MovieHeader = (movie) => {
  const movieRatings = MovieRatings(movie);

  const movieIdentifiers = MovieIdentifiers(movie);

  return (
    <div className="movie-header">
      {movieIdentifiers}
      {movieRatings}
    </div>
  );
};

export default MovieHeader;