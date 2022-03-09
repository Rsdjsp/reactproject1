import React, { useContext, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import { moviesContext } from "../context/MoviesContext";
import { userContext } from "../context/UserContext";
import { RiStarSmileFill } from "react-icons/ri";

function Details() {
  const { user, logged } = useContext(userContext);
  const { id } = useParams();
  const { movies, reviews, addReview, loading, setLoading, removeReview } =
    useContext(moviesContext);
  const comment = useRef();
  const rating = useRef();

  const movie = movies.find((movie) => movie._id === id);
  const comments = reviews.filter((comment) => comment.movieId === id);

  if (!movie && !loading) {
    return <Navigate to="/notfound" />;
  }

  const message = () => {
    alert("Please Login or register for comment this movie");
  };

  const add = () => {
    let fullComment = comment.current.value;
    let stars = rating.current.value;
    let creator = user.userId;
    addReview(movie, fullComment, creator, stars);
    comment.current.value = "";
    setLoading(true);
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
        <div className="flex-row justify-center">
          <img
            src={movie.background}
            alt="background"
            className="w-full  h-full fixed -z-10 blur-sm opacity-90 "
          />
          <div className="m-auto relative bg-slate-50 w-3/5  translate-y-28 h-fit">
            <div>
              <article className="flex justify-center  w-1/2 translate-x-3/4 h-20 ">
                <h1 className="m-auto font-sans font-bold text-6xl text-pomegranate-500 ">
                  {movie.title}
                </h1>
              </article>
              <article className="flex mb-8">
                <div className="flex-row border-slate-900 border-2 w-96  h-120 font-sans -translate-x-32 bg-slate-50">
                  <img
                    src={movie.poster}
                    alt="Poster"
                    className=" relative  w-96  h-120"
                  />
                  <div className="w-3/4 -translate-y-16 bg-slate-50 ml-1">
                    <p className="my-auto flex text-2xl">
                      {" "}
                      Rating:{movie.rating}
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
                <p className=" w-3/6 pt-2 text-justify font-sans -translate-x-16 text-xl font-semibold">
                  {movie.review}
                </p>
              </article>
            </div>
            <section>
              <input type="text" name="comment" ref={comment} />
              <select ref={rating}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button onClick={logged ? add : message}>Agregar review</button>
            </section>
            <section>
              {comments.map((comment, i) => {
                return (
                  <div key={i}>
                    {comment.stars && <p>{comment.stars}</p>}
                    {comment.date && <p>{comment.date.slice(0, 10)}</p>}
                    {comment.comment && <p>{comment.comment}</p>}
                    {comment.userName && <p>{comment.userName}</p>}
                    <button onClick={() => deleteReview(comment._id)}>
                      Eliminar
                    </button>
                  </div>
                );
              })}
            </section>
          </div>
          <footer className="translate-y-28">
            <Footer />
          </footer>
        </div>
      </>
    );
  } else {
    return <div>Loading..</div>;
  }
}

export default Details;
