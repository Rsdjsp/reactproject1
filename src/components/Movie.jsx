import React from "react";
import { Link } from "react-router-dom";
import "../css/movie.css";
import Stars from "./Stars";

function Movie({ movie }) {
  return (
    <article className="movie">
      {/* Bloque contenedor */}
      <Link to={"/details/" + movie._id}>
        <h2 className="movie__title">{movie.title}</h2>
      </Link>
      <div className="movie__stars">
        <Stars movie={movie} />
        {movie.rating}
        {/* {isNaN(movie.rating / movie.numberOfReviews)
          ? 0
          : movie.rating / movie.numberOfReviews} */}
      </div>
      <img className="movie-poster" src={movie.poster} alt={movie.title}></img>
    </article>
  );
}

export default Movie;
