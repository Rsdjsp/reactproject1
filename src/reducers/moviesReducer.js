export const moviesInitialState = {
  movies: [],
  popular: [],
  unpopular: [],
  recent: [],
};

export default function moviesReducer(state, action) {
  let newState;
  switch (action.type) {
    case "addMovies":
      const { movies } = action;
      newState = { ...state, movies: movies };
      break;

    case "addPopular":
      const { popular } = action;
      newState = { ...state, popular: popular };
      break;

    case "addUnpopular":
      const { unpopular } = action;
      newState = { ...state, unpopular: unpopular };
      break;

    case "addRecent":
      const { recent } = action;
      newState = { ...state, recent: recent };
      break;

    default:
      newState = state;
  }

  return newState;
}
