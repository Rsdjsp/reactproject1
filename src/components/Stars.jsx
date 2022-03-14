import React from "react";
import ReactStarsRating from "react-awesome-stars-rating";

const Stars = ({ rating, setRating }) => {
  const onChange = (value) => {
    setRating(value);
  };
  return <ReactStarsRating  onChange={onChange} value={rating} />;
};

export default Stars;
