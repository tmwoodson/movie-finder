import React from 'react';
import ReactPlayer from 'react-player';

class MovieTrailer extends React.Component {

  render() {
    const url = this.props.TrailerUrl;
    return (<div className="trailer"><ReactPlayer url={url} /></div>);
  }
}

export default MovieTrailer;