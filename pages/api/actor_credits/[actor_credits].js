import axios from 'axios';

async function getActorId(actorName) {
  const actor = actorName.replace(' ', '%20');
  const url = `https://api.themoviedb.org/3/search/person?include_adult=false&page=1&query=${actor}&language=en-US&api_key=${process.env.movieDatabaseApiKey}`;

  const response = await axios.get(url);

  return response.data.results[0].id;
}

async function getActorMovieCredits(id) {
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.movieDatabaseApiKey}&language=en-US`;
  const response = await axios.get(url);

  return response.data.cast;
}

export default async function (req, res) {
  console.log(req.query.actor_credits);
  const actorId = await getActorId(req.query.actor_credits);
  const payload = await getActorMovieCredits(actorId);
  res.status(200).json(payload);
}
