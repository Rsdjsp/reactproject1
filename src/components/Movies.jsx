import React from "react";
import Footer from "./Footer";
import Movie from "./Movie";

function Movies({ movies }) {
  movies = movies.slice(0, 39);
  return (
    <>
      <div className=" relative movies-container bg-slate-500 w-full h-full grid-flow-row grid grid-cols-3 gap-8 p-8 pt-28">
        {movies.map((movie) => {
          return <Movie key={movie._id} movie={movie} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default Movies;
