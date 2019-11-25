import request from 'request';

require('dotenv').config();

const url = `https://api.themoviedb.org/3/search/person?include_adult=false&page=1&query=nathan%20fillion&language=en-US&api_key=${process.env.movieDatabaseApiKey}`;

const options = {
  method: 'GET',
  url,
};

request(options, (err, response, body) => {
  if (err) {
    throw err;
  }
  console.log(body);
});
