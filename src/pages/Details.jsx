import React, { useContext, useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import { moviesContext } from "../context/MoviesContext";
import { userContext } from "../context/UserContext";
import { RiStarSmileFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import ReactStarsRating from "react-awesome-stars-rating";
import Stars from "../components/Stars";
import Modal from "../components/Modal";
import { animateScroll as scroll } from "react-scroll";
import Loading from "../components/Loading";

function Details() {
  const { user, logged } = useContext(userContext);
  const { id } = useParams();
  const { movies, reviews, addReview, setLoading, removeReview } =
    useContext(moviesContext);
  const comment = useRef();
  const [rating, setRating] = useState(0);
  const { modal, setModal } = useContext(userContext);
  const { userName } = useContext(userContext);

  const movie = movies.find((movie) => movie._id === id);
  const comments = reviews.filter((comment) => comment.movieId === id);

  const message = () => {
    scroll.scrollToTop();
    setModal(true);
  };

  const add = () => {
    let fullComment = comment.current.value;
    let stars = rating;
    let creator = user.userId;
    addReview(movie, fullComment, creator, stars);
    comment.current.value = "";
    setLoading(true);
    setRating(0);
  };

  const deleteReview = (commentId) => {
    let movieId = movie._id;
    let reviewId = commentId;
    removeReview(movieId, reviewId);
    setLoading(true);
  };

  if (movie && comments) {
    return (
      <>
        <div className="flex-row justify-center h-full min-h-full">
          {modal && (
            <div className="h-fit">
              {" "}
              <Modal userName={"alert"} />{" "}
            </div>
          )}
          <img
            src={movie.background}
            alt="background"
            className="w-full  h-full fixed -z-10 blur-sm opacity-95  "
          />
          <div className="m-auto  lg:flex-row relative bg-gradient-to-r from-heather-500 to-heather-300 sm:w-11/12  lg:w-8/12  translate-y-28  h-max shadow-xl mb-8 rounded-md ">
            <div className="mx-4">
              <article className="flex justify-center h-fit  lg:ml-72 sm:w-full lg:w-1/2  sm:mb-8 lg:mb-0   min-h-20 ">
                <h1 className="m-auto mt-4 mb-4 font-sans text-center font-bold text-3xl sm:text-4xl md:text-5xl  lg:text-6xl text-pomegranate-500 ">
                  {movie.title}
                </h1>
              </article>
              <article className="flex-row lg:grid lg:grid-flow-row lg:grid-cols-2 mb-8 relative items-center">
                <div className="  relative sm:flex lg:flex-row   border-slate-900 border-2  sm:w-96 lg:w-96 sm:ml-7  md:ml-4 sm:h-120 md:h-120 lg:h-120 font-sans sm:-translate-x-0 lg:-translate-x-2 bg-slate-50 shadow-2xl rounded-md">
                  <img
                    src={movie.poster}
                    alt="Poster"
                    className=" sm:w-full lg:w-96 w-full h-120 sm:h-full md:h-full lg:h-120 rounded-md"
                  />
                  <div className="w-3/4 absolute left-0 top-96 mt-7 sm:top-96 sm:mt-4 lg:mt-6 md:top-96 bg-slate-50 sm:ml-0 sm:pl-3 sm:pb-1 shadow-md ">
                    <p className="my-auto flex text-2xl mb-2 ">
                      Rating: {movie.rating}
                      <RiStarSmileFill className="my-auto text-3xl text-pomegranate-500 ml-2" />
                    </p>
                    <span className="flex gap-5 justify-start">
                      <p className="text-xl border-r-4 border-orange-900 pr-6 text-pomegranate-500 font-semibold">
                        {movie.rating >= 7.5 ? "Popular" : "Recent"}
                      </p>
                      <p className="my-auto text-xl">
                        {movie.date.slice(0, 10)}
                      </p>
                    </span>
                  </div>
                </div>
                <p className=" max-w-full mt-2 sm:mx-7  sm:w-11/12  lg:w-11/12 pt-2 text-justify font-sans   text-xl font-semibold lg:-translate-x-12">
                  {movie.review}
                </p>
              </article>
            </div>
            <section className="relative  mt-20 sm:mx-10 md:mx-14 lg:mx-20  -translate-y-8 rounded-md">
              <article className=" mb-8  flex reltavie h-36 shadow-xl bg-heather-400 border-2 border-heather-500 rounded-md">
                <FaUserAlt className="my-auto text-8xl  p-2 mr-4 text-slate-700" />

                <input
                  name="comment"
                  ref={comment}
                  className=" mt-9 w-full mr-8 h-10 max-h-fit border-b-4 border-b-pomegranate-500  outline-none focus:border-heather-500 border-2"
                />
                <span className=" -rotate-90  absolute left-36 top-8 my-auto ">
                  <Stars setRating={setRating} rating={rating} />
                </span>

                <button
                  type="submit"
                  className="absolute  my-auto right-10 top-24  font-sans text-xl text-pomegranate-500 hover:bg-pomegranate-500 hover:text-slate-50 hover:h-8  hover:px-1 hover:rounded-md hover:shadow-lg"
                  onClick={logged ? add : message}
                >
                  Agregar review
                </button>
              </article>
              <article className="bg-heather-500 border-2 border-heather-600 rounded-md">
                {comments.map((comment, i) => {
                  return (
                    <div
                      key={i}
                      className="relative mb-2  flex h-36 shadow-xl  border-b-2  border-b-slate-600  rounded-md "
                    >
                      {comment.userName && (
                        <p className="font-sans absolute top-2  left-8 text-2xl text-pomegranate-500">
                          {comment.userName}
                        </p>
                      )}
                      {comment.stars && (
                        <p className=" -rotate-90  absolute right-40 -top-10">
                          <ReactStarsRating value={comment.stars} />
                        </p>
                      )}
                      {comment.date && (
                        <p className="absolute top-24 left-8 text-slate-700 ">
                          {comment.date.slice(0, 10)}
                        </p>
                      )}
                      {comment.comment && (
                        <p className="mt-10 w-full ml-8 mr-4 bg-slate-50 h-14 pl-2 pt-2 max-h-fit border-t-4 border-t-pomegranate-500 capitalize">
                          {comment.comment}
                        </p>
                      )}
                      <FaUserAlt className="my-auto text-8xl  p-0 mr-4 text-slate-700" />
                      {user.name === userName && (
                        <button
                          onClick={() => deleteReview(comment._id)}
                          className="absolute right-28 top-24 font-sans text-xl text-pomegranate-500  hover:border-b-2 hover:border-b-pomegranate-500"
                        >
                          Eliminar
                        </button>
                      )}
                    </div>
                  );
                })}
              </article>
            </section>
          </div>
          <footer className="translate-y-28">
            <Footer />
          </footer>
        </div>
      </>
    );
  } else {
    return (
      <div className="bg-heather-500">
        <Loading />
      </div>
    );
  }
}

export default Details;
