import React, { useContext, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { moviesContext } from "../context/MoviesContext";
import { userContext } from "../context/UserContext";

function Details() {
  const { user, logged } = useContext(userContext);
  const { id } = useParams();
  const { movies, reviews, addReview, loading } = useContext(moviesContext);
  const comment = useRef();
  const rating = useRef();

  const movie = movies.find((movie) => movie._id === id);
  const comments = reviews.filter((comment) => comment.movieId === id);

  if (!movie && !loading) {
    return <Navigate to="/notfound" />;
  }

  const message = () => {
    alert("Please Login or register for comment this movie");
  };

  const add = () => {
    let fullComment = comment.current.value;
    let stars = rating.current.value;
    let creator = user.userId;
    addReview(movie, fullComment, creator, stars);
    comment.current.value = "";
  };

  if (movie && comments) {
    return (
      <div>
        <section>
          <div>
            <img src={movie.background} alt="background" />
            <h1>{movie.title}</h1>
            <p>{movie.rating}</p>
            <img src={movie.poster} alt="Poster" />
            <p>{movie.review}</p>
          </div>
          <input type="text" name="comment" ref={comment} />
          <select ref={rating}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button onClick={logged ? add : message}>Agregar review</button>
        </section>
        <section>
          {comments.map((comment, i) => {
            return (
              <div key={i}>
                <p>{comment.date.slice(0, 10)}</p>
                <p>{comment.comment}</p>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
}

export default Details;
