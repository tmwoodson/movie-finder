import React from 'react';

const MovieIdentifiers = (movie, onDetailClick) => {
  const {Title, Director, Year, Country} = movie;

  return (
    <div className="movie-identifiers">
      <span className="movie-title">{Title}</span>
      <span className="movie-details-button link" onClick={onDetailClick}>&#9432;</span>
      <div className="movie-disambiguation">
        <div className="movie-director disambiguation-part">{Director}</div>
        <div className="movie-disambiguation-divider disambiguation-part">✪</div>
        <div className="movie-year disambiguation-part">{Year}</div>
        <div className="movie-disambiguation-divider disambiguation-part">✪</div>
        <div className="movie-country">{Country}</div>
      </div>
    </div>
  );
};

export default MovieIdentifiers;