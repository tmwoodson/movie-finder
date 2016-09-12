import React from 'react';

import MovieList from './movie-list';

import fakeMovies from '../fake-data';

import {fetchMovies} from '../helpers/fetch_helpers';

const WithData = (Wrapped) => {
  return class WrappedApplication extends React.Component {
    state = {
      movies: fakeMovies
    };

    componentDidMount() {
      const movieData = fetchMovies()
        .then((movies) => {
          const dataFromAPI = movies;
          console.log('using the real movie data from the api');
          this.setState({movies: dataFromAPI});
        })
        .catch((err) => {
          console.log('falling back on the fake data:', err);
          // this.setState({movies: fakeMovies});
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

  render() {
    return (
      <div className="movie-finder">
        <div className="heading">In Theaters Nearby</div>
        <MovieList movies={this.props.movies} />
      </div>
    );
  };
};

export default WithData(Application);

