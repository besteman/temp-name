import { useState } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const [actorOne, setActorOneName] = useState('Nathan Fillion');
  const [actorTwo, setActorTwoName] = useState('Alan Tudyk');

  const sumbitActor = (event) => {
    event.preventDefault();
    console.log(actorOne);
    console.log(actorTwo);
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center m-4">
            <h1>Search for Movies that Actors were in Together</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="input-group mb-3">
              {/* <input onChange={(e) => setActorOneName(e.target.value)} value={actorOne} type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" /> */}
              <input value="Nathan Fillion" type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="input-group mb-3">
              {/* <input onChange={(e) => setActorTwoName(e.target.value)} value={actorTwo} type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" /> */}
              <input value="Alan Tudyk" type="text" className="form-control" placeholder="Actor Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-primary" onClick={sumbitActor}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
