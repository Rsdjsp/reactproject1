import React, { useContext, useEffect, useReducer, useState } from "react";
import { userContext } from "../context/UserContext";

import moviesReducer, { moviesInitialState } from "../reducers/moviesReducer";
import reviewsReducer, {
  reviewsInitialState,
} from "../reducers/reviewsReducer";

export const moviesContext = React.createContext();

function MoviesContext({ children }) {
  const [loading, setLoading] = useState(true);
  const { userName } = useContext(userContext);
  const [movies, setMovies] = useReducer(moviesReducer, moviesInitialState);

  const [reviews, dispatchReviews] = useReducer(
    reviewsReducer,
    reviewsInitialState
  );

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
  }, [loading]);

  const addReview = (movie, comment, creator, stars) => {
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
          stars: stars,
          userName: userName,
        }),
      }
    )
      .then((res) => res.json())
      .then((review) => {
        dispatchReviews({ type: addReview, review: review });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const removeReview = (movieId, reviewId) => {
    fetch(
      `https://movies-341014.ue.r.appspot.com/reviews/${movieId}/${reviewId}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("https://movies-341014.ue.r.appspot.com/filter/popular")
      .then((res) => res.json())
      .then((data) => {
        setMovies({ type: "addPopular", popular: data });
        setLoading(false);
      })
      .catch((error) => setLoading(false));
    fetch("https://movies-341014.ue.r.appspot.com/filter/unpopular")
      .then((res) => res.json())
      .then((data) => {
        setMovies({ type: "addUnpopular", unpopular: data });
        setLoading(false);
      })
      .catch((error) => setLoading(false));
    fetch("https://movies-341014.ue.r.appspot.com/filter/recent")
      .then((res) => res.json())
      .then((data) => {
        setMovies({ type: "addRecent", recent: data });
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  }, []);

  return (
    <moviesContext.Provider
      value={{
        loading,
        movies: movies.movies,
        popular: movies.popular,
        unpopular: movies.unpopular,
        recent: movies.recent,
        addReview,
        reviews: reviews.reviews,
        setLoading,
        removeReview,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
}

export default MoviesContext;
