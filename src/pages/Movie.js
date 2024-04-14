import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard'
import {Link, useParams} from 'react-router-dom';
import NavBar from "../components/NavBar";

function Movie({title}) {
  const [movies, setMovies] = useState([])
  const params = useParams();
  const movieId = params.id;

  useEffect (() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(movieData => setMovies(movieData))
  }, [movieId]);
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movies.title}</h1>
        <p>{movies.time}</p>
        <span>{movies.genres}</span>
      </main>
    </>
  );
};

export default Movie;
