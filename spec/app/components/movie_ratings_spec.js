import '../../spec_helper';
import ReactDOM from 'react-dom';

describe('Movie ratings', () => {

  const movie = {
    Metascore: "0",
    imdbRating: "1.4",
    imdbUrl: "http://www.imdb.com/title/meow"
  };

  describe('When the movie has both ratings', () => {
    beforeEach(() => {
      const MovieRatings = require('../../../app/components/movie-ratings').default;
      ReactDOM.render(<MovieRatings {...movie} />, root);
    });

    it('shows the Metacritic rating', () => {
      expect('.movie-ratings').toContainText(movie.Metascore);
    });

    it('shows the imdb rating', () => {
      expect('.movie-ratings').toContainText(movie.imdbRating);
    });

    it('links to the imdb page', () => {
      expect('.movie-ratings a').toHaveAttr('href', movie.ImdbUrl);
    });
  });

  describe('When the movie does not have an imdb page', () => {
    beforeEach(() => {
      movie.imdbRating = 'N/A';
      movie.imdbUrl = '';
      const MovieRatings = require('../../../app/components/movie-ratings').default;
      ReactDOM.render(<MovieRatings {...movie} />, root);
    });

    it('does not contain an imdb link', () => {
      expect('.movie-ratings a').not.toExist();
    });
  });

});