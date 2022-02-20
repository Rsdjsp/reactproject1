import React, { createContext, useEffect, useReducer, useState } from "react";
import moviesReducer, { moviesInitialState } from "../reducers/moviesReducer";
import reviewsReducer, {
  reviewsInitialState,
} from "../reducers/reviewsReducer";

export const moviesContext = createContext();

function MoviesContext({ children }) {
  const [movies, setMovies] = useReducer(moviesReducer, moviesInitialState);

  const [reviews, dispatchReviews] = useReducer(
    reviewsReducer,
    reviewsInitialState
  );

  const [loading, setLoading] = useState(true);

  const addReview = (movie, stars, comment) => {
    setMovies({ type: "addStars", movie, stars });
    dispatchReviews({ type: "addReview", idMovie: movie._id, comment });
  };

  useEffect(() => {
    fetch("https://backendtzuzulcode.wl.r.appspot.com/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies({ type: "addMovies", movies: data });
        setLoading(false);
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
      }}
    >
      {children}
    </moviesContext.Provider>
  );
}

export default MoviesContext;
