import React, { useEffect, useReducer, useState } from "react";
import moviesReducer, { moviesInitialState } from "../reducers/moviesReducer";
import reviewsReducer, {
  reviewsInitialState,
} from "../reducers/reviewsReducer";

export const moviesContext = React.createContext();

function MoviesContext({ children }) {
  const [movies, setMovies] = useReducer(moviesReducer, moviesInitialState);

  const [reviews, dispatchReviews] = useReducer(
    reviewsReducer,
    reviewsInitialState
  );

  const addReview = (movie, comment, creator) => {
    fetch(
      `https://movies-341014.ue.r.appspot.com/movies/${movie._id}/reviews`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          creator: creator,
        }),
      }
    )
      .then((res) => res.json())
      .then((review) => {
        dispatchReviews({ type: addReview, review: review });
      })
      .catch((error) => console.log(error));

    // setMovies({ type: "addStars", movie, stars });
    // dispatchReviews({ type: "addReview", reviews:comments });
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://movies-341014.ue.r.appspot.com/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies({ type: "addMovies", movies: data });
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("https://movies-341014.ue.r.appspot.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        dispatchReviews({ type: "fetchReview", reviews: data });
      })
      .catch((error) => setLoading(false));
  }, []);

  return (
    <moviesContext.Provider
      value={{
        loading,
        movies: movies.movies,
        addReview,
        reviews: reviews.reviews,
        setLoading,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
}

export default MoviesContext;
