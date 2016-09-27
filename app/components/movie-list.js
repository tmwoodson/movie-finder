import React from 'react';

import Movie from './movie';

class MovieList extends React.Component {

  state = {
    expandedMovieIndex: null,
  }

  render() {
    const {movies} = this.props;

    if (!movies) {
      console.trace('something is wrong');
    }

    const movieNodes = movies.map((movie, i) => {

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