import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/movies")
    .then(res=>res.json())
    .then(movieData => setMovies(movieData))
  }, [])

  const movieList = movies.map(movie =>{
    return <MovieCard key={movie.id} movie={movie}/>
  });

  return (
    <>
    <h1>Home Page</h1>
      <header>
        <NavBar />
      </header>
      <main>
        {movieList}
      </main>
    </>
  );
};

export default Home;
