import 'es6-promise';
import fetch from 'isomorphic-fetch';


const url = 'http://localhost:5000/movies';

module.exports.fetchMovies = () => {
  return fetch(url).then((response) => {
      if(response.status !== 200) {
        throw new Error('no bueno');
      }
      return response.json();
    })
    .then((data) => {
      return data.movies;
    })
    .catch((err) => {
      console.log('there has been a terrible mistake:', err);
    });
};
