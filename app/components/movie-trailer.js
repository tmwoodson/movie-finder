import React from 'react';
import ReactPlayer from 'react-player';

class MovieTrailer extends React.Component {

  render() {
    console.log('rendering...');
    const url = this.props.TrailerUrl;
    const showPlayer = url.indexOf('watch?v=') >= 0;
    const trailer = showPlayer 
                    ? 
                    (<ReactPlayer url={url} />)
                    : 
                    (<div>Watch the trailer <a href={url} target="_blank">here</a>.</div>);

    return (
        <div className="trailer">
          {trailer}
        </div>
      );
  }
}

export default MovieTrailer;