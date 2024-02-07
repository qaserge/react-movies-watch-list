import React, { useState } from "react";
import tempWatchedData from "../../data/TempWatchedData";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./watched_movie_list/WatchedMoviesList";

export default function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
}
