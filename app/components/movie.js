import React from 'react';

import MovieHeader from './movie-header';
import MovieInfo from './movie-info';

const Movie = (movie) => {

  const movieHeader = MovieHeader(movie);
  const movieInfo = MovieInfo(movie);

  return (
    <div className="movie-wrapper">
      <div className="movie">
        {movieHeader}
        {movieInfo}
      </div>
    </div>
  );
};

export default Movie;