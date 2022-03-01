export const reviewsInitialState = {
  reviews: [],
};

export default function reviewsReducer(state, action) {
  let newState;
  switch (action.type) {
    case "fetchReview":
      const { reviews } = action;
      newState = { reviews };
      break;

    case "addReview":
      console.log(action,"review action");
      const { idMovie, comment } = action;
      newState = {
        reviews: [...state.reviews],
        // reviews: [
        //   ...state.reviews,
        //   { id: state.reviews.length, idMovie, comment },
        // ],
      };
      break;

    default:
      newState = state;
  }

  return newState;
}
