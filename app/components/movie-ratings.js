import React from 'react';

const MovieRatings = (movie) => {
  const {imdbRating, Metascore} = movie;

  return (
    <div className="movie-ratings">
      <div className="rating-wrapper">
        <div className="rating-name">
          IMDB:
        </div>
        <div className="rating-number">
          {imdbRating}
        </div>
      </div>
      <div className="rating-wrapper">
        <div className="rating-name">
          Metacritic:
        </div>
        <div className="rating-number">
          {Metascore}
        </div>
      </div>
    </div>
  );
};

export default MovieRatings;