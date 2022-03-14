import React, { useContext } from "react";
import { moviesContext } from "../context/MoviesContext";
import Footer from "./Footer";
import Loading from "./Loading";
import Movie from "./Movie";

function Movies({ movies }) {
  movies = movies.slice(0, 39);
  const { loading } = useContext(moviesContext);
  return (
    <>
      <div className=" relative movies-container bg-slate-500 w-full h-full grid-flow-row grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 pt-28 ">
        {loading && <Loading />}
        {!loading &&
          movies.map((movie) => {
            return <Movie key={movie._id} movie={movie} />;
          })}
      </div>
      <Footer />
    </>
  );
}

export default Movies;
