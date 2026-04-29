import { React, useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";
function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange =(e)=>{
    setSearchTerm(e.target.value)
  }

  const filterMovies = movies.filter(movie=>movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  return (
    <div>
    <input type="text" className='search-input' placeholder="Search Movies ..." value={searchTerm} onChange={handleSearchChange}/>   
    <div className="movies-grid">
        
      {filterMovies.map((movie) => {
       return <MovieCard movie={movie} key={movie.id}/>
       
      })}
    </div>
    </div>
  );
}

export default MoviesGrid;
