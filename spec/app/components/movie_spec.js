import '../../spec_helper';
import ReactDOM from 'react-dom';

describe('A movie', () => {

  let onDetailClick;
  let MovieTrailer;

  const movie = {
    Title: "Deuce Bigelow: Male Gigolo",
    Year:"2001",
    Director: "Donald Trump",
    Plot: "Deuce Bigelow is a male prostitute. Dick jokes, fart jokes, and other hilarious hijinx ensue.",
    Country: "Dumbland",
    Metascore: "0",
    imdbRating: "1.4",
    TrailerUrl: "http://www.trailer.com/watch?v=123",
    Theaters: []
  };

  beforeEach(() => {
    MovieTrailer = require('../../../app/components/movie-trailer').default;
    spyOnRender(MovieTrailer).and.callThrough();
  });


  describe('The collapsed list view', () => {
    beforeEach(() => {
      onDetailClick = jasmine.createSpy('onDetailClick');

      const Movie = require('../../../app/components/movie').default;
      ReactDOM.render(<Movie movie={movie} onDetailClick={onDetailClick}/>, root);
    });

    it('shows the title', () => {
      expect('.movie').toContainText(movie.Title);
    });

    it('shows the director name', () => {
      expect('.movie').toContainText(movie.Director);
    });

    it('shows the year', () => {
      expect('.movie').toContainText(movie.Year);
    });

    it('shows the description', () => {
      expect('.movie').toContainText(movie.Plot);
    });

    it('shows the country', () => {
      expect('.movie').toContainText(movie.Country);
    });

    it('does not show the trailer', () => {
      expect(MovieTrailer).not.toHaveBeenRendered();
    });

    describe('clicking for more information', () => {

      beforeEach(() => {
        $('.movie-details-button').click();
      });

      it('calls the onDetailClick callback', () => {
        expect(onDetailClick).toHaveBeenCalled();
      });

    });
  });

  describe('The expanded (detailed) view', () => {

    describe('when there is a movie trailer', () => {
      beforeEach(() => {
        onDetailClick = jasmine.createSpy('onDetailClick');

        const Movie = require('../../../app/components/movie').default;
        ReactDOM.render(<Movie movie={movie} onDetailClick={onDetailClick} expanded={true}/>, root);
      });

      it('shows the trailer', () => {
        expect(MovieTrailer).toHaveBeenRenderedWithProps(jasmine.objectContaining({TrailerUrl: movie.TrailerUrl}));
      });
    });

    describe('when there is a promotional link instead of a movie trailer', () => {
      beforeEach(() => {
        onDetailClick = jasmine.createSpy('onDetailClick');

        movie.TrailerUrl = 'http://www.youtube.com/trailer/some-movie';

        const Movie = require('../../../app/components/movie').default;
        ReactDOM.render(<Movie movie={movie} onDetailClick={onDetailClick} expanded={true}/>, root);
      });

      it('gives a link to the page with the trailer on it', () => {
        expect('.trailer').toContainText('Watch the trailer');
        expect('.trailer a').toHaveAttr('href', movie.TrailerUrl);
      });
    });

    describe('when there is NOT a movie trailer', () => {
      beforeEach(() => {
        onDetailClick = jasmine.createSpy('onDetailClick');

        movie.TrailerUrl = '';

        const Movie = require('../../../app/components/movie').default;
        ReactDOM.render(<Movie movie={movie} onDetailClick={onDetailClick} expanded={true}/>, root);
      });

      it('does not show the trailer', () => {
        expect(MovieTrailer).not.toHaveBeenRendered();
      });
    });
  });

});

