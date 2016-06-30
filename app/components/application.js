import React from 'react';

import MovieList from './movie-list';

import movies from '../fake-data';

const WithData = (Wrapped) => {
  return class WrappedApplication extends React.Component {
    state = {
      movies: []
    };

    componentWillMount() {
      this.setState({movies});
    };

    render() {
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

