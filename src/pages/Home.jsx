import React, { useContext } from "react";
import Movies from "../components/Movies";
import { moviesContext } from "../context/MoviesContext";

function Home() {
  const { movies } = useContext(moviesContext);

  return (
    <>
      <div>
        <Movies movies={movies} />
      </div>
    </>
  );
}

export default Home;
