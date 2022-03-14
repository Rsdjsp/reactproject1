import React from "react";
import { Link } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

function FilterMovie({ movie }) {
  return (
    <article className=" relative h-fit font-sans  rounded-lg ">
      <img
        className=" w-full md:h-80 lg:h-96 rounded-t-md "
        src={movie.background}
        alt={movie.title}
      ></img>

      <div className="bg-slate-50 rounded-b-md  flex-row h-80  sm:h-72 md:h-80 lg:h-72  px-6 pt-4 font-semibold text-lg relative">
        <Link to={"/details/" + movie._id}>
          <h2 className="text-left sm:mb-7 md:mb-2  lg:mb-7 font-bold sm:text-3xl lg:text-4xl   text-pomegranate-500 hover:underline hover:underline-offset-4 ">
            {movie.title}
          </h2>
        </Link>
        <p className="w-full text-slate-800 ">
                  {movie.review.slice(0, 200)}...
        </p>
        <p className="text-pomegranate-500 font-bold absolute top-72  sm:top-64 md:top-72  lg:top-64 ">
          {movie.date.slice(0, 10)}
        </p>
        <span className="-rotate-90 absolute top-60 sm:top-52 md:top-60 lg:top-52 left-48 -ml-3  bg-slate-50 ">
          <ReactStarsRating value={Math.round(movie.rating / 2)} />
        </span>
      </div>
    </article>
  );
}

export default FilterMovie;
