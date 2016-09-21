import React from 'react';

const MovieRatings = (movie) => {
  const {imdbRating, imdbUrl, Metascore} = movie;

  const imdbNode = imdbUrl ? 
                   (<a className="rating-name"  target="_blank" href={imdbUrl}>IMDB:</a>) 
                   : 
                   (<div className="rating-name">IMDB:</div>);

  return (
    <div className="movie-ratings">
      <div className="rating-wrapper">
        {imdbNode}
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