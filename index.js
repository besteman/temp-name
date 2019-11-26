import request from 'request';
import axios from 'axios';

require('dotenv').config();

const personSearchUrl = `https://api.themoviedb.org/3/search/person?include_adult=false&page=1&query=nathan%20fillion&language=en-US&api_key=${process.env.movieDatabaseApiKey}`;

const getMoviesByActor = (actorId) => {
  const movieCreditsUrl = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${process.env.movieDatabaseApiKey}&language=en-US`;

  const options = {
    method: 'GET',
    url: movieCreditsUrl,
  };

  request(options, (err, response, body) => {
    if (err) {
      throw err;
    }

    const temp = JSON.parse(body);

    console.log(temp);
  });
};


const getActorId = async () => {
  const temp = await axios(personSearchUrl);

  return temp.data.results[0].id;
};

const temp = getActorId();
console.log(temp);
