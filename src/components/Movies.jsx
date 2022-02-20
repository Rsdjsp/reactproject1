import React from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <div className="movies-container">
      {movies.map((movie) => {
        return <Movie key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default Movies;
