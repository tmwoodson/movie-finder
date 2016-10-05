import React from 'react';

import MovieList from './movie-list';
import LocationInput from './location-input';

import fakeMovies from '../fake-data';

import {fetchMovies} from '../helpers/fetch_helpers';

const WithData = (Wrapped, zipcode) => {
  return class WrappedApplication extends React.Component {
    state = {
      movies: fakeMovies
    };

    componentDidMount() {
      const movieData = fetchMovies(zipcode)
        .then((movies) => {
          const dataFromAPI = movies;
          console.log('using the real movie data from the api');
          this.setState({movies: dataFromAPI});
        })
        .catch((err) => {
          console.log('falling back on the fake data:', err);
        });
    };

    render() {
      const {movies} = this.state;
      return (
        <Wrapped movies={movies} />
      );
    };
  };
};


class Application extends React.Component {

  state = {
    zipcode: null
  }

  render() {

    let pageContent;

    const whenReady = (zipcode) => {
      this.setState({
        zipcode: zipcode
      });
    };

    const zipcode = this.state.zipcode;
    if (zipcode) {
      const WrappedMovieList = WithData(MovieList, zipcode);
      pageContent = (<WrappedMovieList />);
    } else {
      pageContent = (<LocationInput whenReady={whenReady} />);
    }

    return (
      <div className="movie-finder">
        {pageContent}
      </div>
    );
  };
};


export default Application;

