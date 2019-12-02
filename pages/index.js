import { useState } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

async function getActorCredits(actorOne) {
  console.log(actorOne);
  const response = await fetch(`/api/actor_credits/${actorOne}`);
  const data = await response.json();

  return data;
}

const Home = () => {
  const [actorOne, setActorOneName] = useState('Nathan Fillion');
  const [actorTwo, setActorTwoName] = useState('Alan Tudyk');

  const [actorMovieInfo, setactorMovieInfo] = useState(null);

  async function sumbitActor(event) {
    event.preventDefault();
    const actorInfo = await getActorCredits(actorOne);
    setactorMovieInfo(actorInfo);
    console.log(actorMovieInfo);
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center m-4">
            <h1>Search for Movies that Actors were in Together</h1>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <div className="input-group mb-3">
              <input onChange={(e) => setActorOneName(e.target.value)} value={actorOne} type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" />
              {/* <input value="Nathan Fillion" type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" /> */}
            </div>
          </div>
          <div className="col-md-auto">
            <div className="input-group mb-3">
              {/* <input onChange={(e) => setActorTwoName(e.target.value)} value={actorTwo} type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" /> */}
              <input value="Alan Tudyk" type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className="col-sm-auto">
            <button type="button" className="btn btn-primary" onClick={sumbitActor}>Submit</button>
          </div>
        </div>
        { actorMovieInfo !== null
        && (
        <div className="row">
          <div className="col-md-auto">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Character Name</th>
                  <th scope="col">Release Date</th>
                </tr>
              </thead>
              <tbody>
                {actorMovieInfo.map(({ title, character, release_date: releaseDate }) => (
                  <tr>
                    <td>{title}</td>
                    <td>{character}</td>
                    <td>{releaseDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Home;
