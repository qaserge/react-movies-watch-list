import { useState } from "react";
import tempMovieData from "../../../data/TempMovieData";
import Movie from "./Movie";

export default function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
