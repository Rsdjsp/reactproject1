import React from "react";
import { Link } from "react-router-dom";
import "../css/movie.css";

function Movie({ movie }) {
  return (
    <article className="movie">
      {/* Bloque contenedor */}
      <Link to={"/details/" + movie._id}>
        <h2 className="movie__title">{movie.title}</h2>
      </Link>
      <div className="movie__stars">
        {isNaN(movie.rating / movie.numberOfReviews)
          ? 0
          : movie.rating / movie.numberOfReviews}
      </div>
      <img
        className="movie-poster"
        src={
          "https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg"
        }
        alt={movie.title}
      ></img>
    </article>
  );
}

export default Movie;
