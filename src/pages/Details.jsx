import React, { useContext, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import Movie from "../components/Movie";
import { moviesContext } from "../context/MoviesContext";

function Details() {
  const { id } = useParams();
  const { movies, reviews, addReview, loading } = useContext(moviesContext);
  const comment = useRef();
  const rating = useRef();

  const movie = movies.find((movie) => movie._id === id);
  console.log(movie);
  const add = () => {
    let fullComment = comment.current.value;
    let stars = rating.current.value;
    addReview(movie, stars, fullComment);
  };
  return (
    <>
      <div>
        <img src="#" alt="backgroud" />
              <h1>{movie.title}</h1>
        <img src="#" alt="Poster" />
        <p>reseña</p>
      </div>
      <div>
        <section>
          <input ref={comment} type="text" name="comment" />
          <select ref={rating}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button onClick={add}>Agregar review</button>
        </section>
        <section>
          {reviews.map(
            (review) =>
              review.idMovie === id && <p key={review.id}>{review.comment}</p>
          )}
        </section>
      </div>
    </>
  );
}

export default Details;
