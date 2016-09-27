import React from 'react';

import MovieIdentifiers from './movie-identifiers';
import MovieRatings from './movie-ratings';

const MovieHeader = (movie, onDetailClick) => {
  const movieRatings = MovieRatings(movie);

  const movieIdentifiers = MovieIdentifiers(movie, onDetailClick);

  return (
    <div className="movie-header">
      {movieIdentifiers}
      {movieRatings}
    </div>
  );
};

export default MovieHeader;