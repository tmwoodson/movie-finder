import React from 'react';

import TheaterSummary from './theater-summary';

const MovieInfo = (movie) => {
  const {Plot, Theaters} = movie;
  return (
    <div className="movie-info">
      <div className="additional-movie-info movie-info-part">
        <div className="movie-plot">
          {Plot}
        </div>
        <TheaterSummary theaters={Theaters}/>
      </div>
    </div>
  );
};

export default MovieInfo;