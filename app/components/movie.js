import React from 'react';
import cx from 'classnames';

import MovieHeader from './movie-header';
import MovieInfo from './movie-info';

import MovieTrailer from './movie-trailer';

const Movie = ({movie, onDetailClick, expanded}) => {

  if (!movie.Title) {
    return null;
  }

  const movieHeader = MovieHeader(movie, onDetailClick);
  const movieInfo = MovieInfo(movie);

  const showTrailer = expanded && movie.TrailerUrl;

  return (
    <div className={cx('movie-wrapper', {expanded})}>
      <div className="movie">
        {movieHeader}
        {movieInfo}
        { showTrailer && <MovieTrailer {...movie}/> }
      </div>
    </div>
  );
};

export default Movie;