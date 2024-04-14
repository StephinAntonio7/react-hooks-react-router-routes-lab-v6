import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect (() =>{
    fetch(`http://localhost:4000/actors`)
    .then(r => r.json())
    .then(actorData => setActors(actorData))
  }, []);

  const actorsList = actors.map(actor =>{
    return (
     <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map ((movie,index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
     </article>
    )})

  return (
    <>
    <h1>Actors Page</h1>
      <header>
        <NavBar />
      </header>
      <main>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
