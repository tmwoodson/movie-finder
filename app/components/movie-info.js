import React from 'react';

const MovieInfo = (movie) => {
  const {Plot, Poster} = movie;
  return (
    <div className="movie-info">
      <div className="movie-poster movie-info-part">
        <img src={Poster}/>
      </div>
      <div className="additional-movie-info movie-info-part">
        <div className="movie-plot">
          {Plot}
        </div>
        <div className="theater-info">
          <div>[Theater info here]</div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;