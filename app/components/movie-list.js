import React from 'react';

import Movie from './movie';

class MovieList extends React.Component {

  state = {
    expandedMovieIndex: null,
  }

  componentWillMount() {
    // Without this, props get lost somehow.
    // But it seems like a hack and it should be fixed.
    this.setState({movies: this.props.movies});
  }

  render() {

    const {movies} = this.state;

    const movieNodes = this.state.movies.map((movie, i) => {

      const onDetailClick = () => {
        if (this.state.expandedMovieIndex === null) {
          this.setState({expandedMovieIndex: i});
        } else {
          this.setState({expandedMovieIndex: null});
        }
      };

      const expanded = (i === this.state.expandedMovieIndex);

      return (
        <Movie movie={movie} onDetailClick={onDetailClick} key={i} expanded={expanded}  />
      );
    });

    return (
      <div className="movie-list">
        {movieNodes}
      </div>
    );

  }

}

export default MovieList;