import { useState } from "react";
import Main from "./main/Main";
import NavBar from "./navbar/NavBar";
import tempMovieData from "./data/TempMovieData";
import Logo from "./navbar/Logo";
import Search from "./navbar/Search";
import NumResults from "./navbar/NumResults";
import ListBox from "./main/list_box/ListBox";
import WatchedBox from "./main/watched_box/WatchedBox";
import MovieList from "./main/list_box/movie_list/MovieList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <ListBox movies={movies} setMovies={setMovies}>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
}
