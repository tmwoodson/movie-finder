import '../../spec_helper';
import ReactDOM from 'react-dom';

describe('the movie list', () => {
  const movie = {
    Title: "Deuce Bigelow: Male Gigolo",
  };

  const movies = [movie];

  beforeEach(() => {
    const MovieList = require('../../../app/components/movie-list').default;
    ReactDOM.render(<MovieList movies={movies} />, root);
  });

  describe('upon first render', () => {
    it('does not expand the movie', () => {
      expect('.movie-wrapper').not.toHaveClass('expanded');
    });
  });

  describe('when user clicks for more information on a movie', () => {
    beforeEach(() => {
      $('.movie-details-button').click();
    });

    it('expands the movie', () => {
      expect('.movie-wrapper').toHaveClass('expanded');
    });

  });

});