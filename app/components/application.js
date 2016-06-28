import React from 'react';
import ReactDOM from 'react-dom';

import movies from '../fake-data';

// const WithData = (Wrapped) => {
//   return class WrappedApplication extends React.Component {
//     state = {
//       movies: []
//     };
//
//     componentWillMount() {
//       this.setState({movies});
//     };
//
//     render() {
//       return (
//         <Wrapped movies={movies} />
//       );
//     };
//   };
// };


class Application extends React.Component {
  render() {
    return (<div>Hello</div>);
  };
};

export default Application;

