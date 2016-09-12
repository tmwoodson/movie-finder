import '../../spec_helper';
import ReactDOM from 'react-dom';

describe('A movie', () => {

  const movie = {
      Title: "Deuce Bigelow: Male Gigolo",
      Year:"2001",
      Director: "Donald Trump",
      Plot: "Deuce Bigelow is a male prostitute. Dick jokes, fart jokes, and other hilarious hijinx ensue.",
      Country: "Dumbland",
      Poster:"lowest_common_denominator.jpg",
      Metascore: "0",
      imdbRating: "1.4"
  };

  beforeEach(() => {
    const Movie = require('../../../app/components/movie').default;
    ReactDOM.render(<Movie {...movie} />, root);
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

  it('shows the imdb rating', () => {
    expect('.movie').toContainText(movie.imdbRating);
  });

  it('shows the metacritic rating', () => {
    expect('.movie').toContainText(movie.Metascore);
  });

  it('shows the movie poster', () => {
    const imgSrc = $('.movie img').attr('src');
    expect(imgSrc).toEqual(movie.Poster);
  });
});
