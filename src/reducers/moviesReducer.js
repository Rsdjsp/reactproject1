export const moviesInitialState = {
  movies: [],
  };

export default function moviesReducer(state, action) {
  let newState;
  switch (action.type) {
    // case "addStars":
    //   const { movie, stars } = action;
    //   movie.rating = movie.stars + parseInt(stars);
    //   movie.numberOfReviews++;
    //   newState = { movies: [...state.movies] };
    //   break;
    case "addMovies":
      const { movies } = action;
      newState = {movies: movies };
      break;
    default:
      newState = state;
  }

  return newState;
}
