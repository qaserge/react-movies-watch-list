import { useState } from "react";
import Main from "./main/Main";
import NavBar from "./navbar/NavBar";
import tempMovieData from "./data/TempMovieData";
import Logo from "./navbar/Logo";
import Search from "./navbar/Search";
import NumResults from "./navbar/NumResults";
import MovieList from "./main/list_box/movie_list/MovieList";
import Box from "./main/Box";
import WatchedSummary from "./main/watched_box/WatchedSummary";
import WatchedMoviesList from "./main/watched_box/watched_movie_list/WatchedMoviesList";
import tempWatchedData from "./data/TempWatchedData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box movies={movies} setMovies={setMovies}>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
