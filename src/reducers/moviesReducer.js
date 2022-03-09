export const moviesInitialState = {
  movies: [],
  };

export default function moviesReducer(state, action) {
  let newState;
  switch (action.type) {
  
    case "addMovies":
      const { movies } = action;
      newState = {movies: movies };
      break;
    default:
      newState = state;
  }

  return newState;
}
