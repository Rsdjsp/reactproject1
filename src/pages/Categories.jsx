import React, { useContext } from "react";
import FilterMovie from "../components/FilterMovie";
import Loading from "../components/Loading";
import { moviesContext } from "../context/MoviesContext";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Categories({ movies }) {
  const { loading } = useContext(moviesContext);
  const mostCategory = movies[0];

  movies = movies.slice(1, 9);
  if (movies && !loading && mostCategory) {
    return (
      <>
        <main className="bg-slate-400 w-full  relative mt-20 h-full font-sans pb-8">
          <div className=" h-fit flex justify-center  ">
            <div className="bg-slate-50 w-11/12 max-w-full  sm:h-80 lg:h-fit lg:max-h-3/4 grid-cols-2 grid  grid-flow-row relative m-auto my-16 shadow-2xl rounded-md">
              <section className="flex justify-between relative h-full">
                <div className="m-auto items-center w-3/4 ">
                  <h1 className="text-center mb-8 font-bold sm:mt-2 text-3xl sm:text-4xl md:text-4xl lg:text-6xl  text-slate-900">
                    {mostCategory.title}
                  </h1>
                  <p className="text-semibold text-slate-800 sm:text-sm md:text-md  lg:text-lg mb-10 ">
                    {mostCategory.review.slice(0, 200)}...
                  </p>
                  <p className="text-pomegranate-500 text-lg font-bold">
                    {mostCategory.date.slice(0, 10)}
                  </p>
                </div>
              </section>
              <section className="flex  lg:h-full relative ">
                <img
                  className=" relative  w-full  h-full rounded-r-md "
                  src={mostCategory.background}
                  alt="movie"
                />
                <Link to={`/details/${mostCategory._id}`}>
                  <button className="text-7xl shadow-md text-slate-50 bg-pomegranate-500 rounded-md absolute top-1/2 -left-9">
                    <AiOutlineArrowRight />
                  </button>
                </Link>
              </section>
            </div>
          </div>
          <div className=" grid grid-flow-row  md:grid-cols-2 gap-6 my-8 sm:mx-20 md:mx-8 lg:mx-14">
            {movies.map((movie) => {
              return <FilterMovie key={movie._id} movie={movie} />;
            })}
          </div>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <div className="bg-slate-400 w-full  relative mt-20 h-full font-sans">
        {" "}
        <Loading />{" "}
      </div>
    );
  }
}

export default Categories;
