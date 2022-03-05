export const reviewsInitialState = {
  reviews: [],
  };

export default function reviewsReducer(state, action) {
  let newState;
  switch (action.type) {
    case "fetchReview":
      const { reviews } = action;
      newState = { reviews:reviews };
      break;

    case "addReview":
      const { review } = action;
      
      newState = [...state.reviews, { reviews:review }];
      break;

    default:
      newState = state;
  }

  return newState;
}
