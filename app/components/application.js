import React from 'react';
import ReactDOM from 'react-dom';

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

const Movie = (movie) => {
  const {Title} = movie;

  return (
    <div className="movie">
      <div className="movie-title">{Title}</div>
    </div>
  );
};

const MovieList = ({movies}) => {
  const movieNodes = movies.map((movie, i) => {
    return (
      <Movie {...movie} key={i} />
    );
  });

  return (
    <div className="movie-list">
      {movieNodes}
    </div>
  );
};


class Application extends React.Component {

  render() {
    return (
      <MovieList movies={this.props.movies} />
    );
  };
};

export default WithData(Application);

