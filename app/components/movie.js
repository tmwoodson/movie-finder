import React from 'react';

const Movie = (movie) => {
  const {Title} = movie;

  const imgSrc = "http://ia.media-imdb.com/images/M/MV5BMjE4MDUyMzMyOF5BMl5BanBnXkFtZTcwMTAxOTQyMQ@@._V1_SX300.jpg";

  return (
    <div className="movie-wrapper">
      <div className="movie">
        <div className="movie-header">
          <div className="movie-identifiers">
            <div className="movie-title">{Title}</div>
            <div className="movie-disambiguation">
              <div className="movie-director disambiguation-part">David Lynch</div>
              <div className="movie-disambiguation-divider disambiguation-part">✪</div>
              <div className="movie-year disambiguation-part">2001</div>
            </div>
          </div>
          <div className="movie-ratings">
            <div className="imdb-rating">IMDB: 8.0</div>
            <div className="metacritic-rating">Metacritic: 7.9</div>
          </div>
        </div>
        <div className="movie-info">
          <div className="movie-poster movie-info-part">
            <img src={imgSrc} />
          </div>
          <div className="additional-movie-info movie-info-part">
            <div className="movie-description">
              After a car wreck on the winding Mulholland Drive renders a woman amnesiac, she and a perky Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.
            </div>
            <div className="theater-info">
              See theaters here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;