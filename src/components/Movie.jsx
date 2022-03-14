import React from "react";
import { Link } from "react-router-dom";
import { RiStarSmileFill } from "react-icons/ri"

function Movie({ movie }) {
  return (
    <article className="border-2 border-heather-600 relative h-fit font-sans rounded-md ">
      <Link to={"/details/" + movie._id}>
        <img
          className=" w-full h-128 border-b-2 border-pomegranate-500 rounded-t-md"
          src={movie.poster}
          alt={movie.title}
        ></img>

        <div className="bg-white flex h-14  columns-2 font-semibold text-lg">
          <article className="flex justify-start w-3/4"><h2 className="my-auto ml-2">{movie.title}</h2></article>
          <article className="flex justify-center  w-1/4"><p className="my-auto flex text-2xl">{movie.rating} <RiStarSmileFill className="my-auto text-3xl text-pomegranate-500 ml-2"/></p></article>
          
        </div>
      </Link>
    </article>
  );
} 

export default Movie;
