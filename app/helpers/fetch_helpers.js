import 'es6-promise';
import fetch from 'isomorphic-fetch';

import config from '../../config/config';

const url = `${config.BASE_API_URL}/movies`;

console.log('using this url:', url);

module.exports.fetchMovies = (zipcode) => {
  const newUrl = url + '?zip=' + zipcode;
  return fetch(newUrl).then((response) => {
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
