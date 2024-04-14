import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect (() =>{
    fetch(`http://localhost:4000/directors`)
    .then(r => r.json())
    .then(directorData => setDirectors(directorData))
  }, []);

  const directorsList = directors.map(director =>{
    return (
     <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map ((movie, index) => (
            <li key={index}>{movie}</li>
          ))}  
        </ul>
     </article>
    )})
  return (
    <>
      <h1>Directors Page</h1>
      <header>
        <NavBar />
      </header>
      <main>
        {directorsList}
      </main>
    </>
  );
};

export default Directors;
