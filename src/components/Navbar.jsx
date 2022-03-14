import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";
import { SiThemoviedatabase } from "react-icons/si";

function Navbar() {
  const { logOut, logged, userName } = useContext(userContext);

  return (
    <>
      <div className="bg-gradient-to-t from-heather-100 to-heather-300 flex w-screen h-20  max-w-screen fixed z-10 left-0 top-0  shadow-md overflow-y-hidden ">
        <div className="flex-row justify-center content-center w-1/4">
          <Link to={"/"}>
            <SiThemoviedatabase className="text-6xl m-auto text-pomegranate-500 mt-3 " />
          </Link>
        </div>
        <div className=" w-2/4 text-slate-900  flex justify-center  ">
          <ul className ={`relative font-sans columns-3 grid  grid-cols-3 ${logged && "sm:-translate-x-10"} md:translate-x-0  m-auto capitalize w-full text-center font-bold sm:text-lg lg:text-2xl`}>
            <Link to={"/recent"}>
              <p className="hover:translate-y-1 hover:text-pomegranate-500 focus:text-pomegranate-500 ">
                recent
              </p>
            </Link>
            <Link
              className="hover:translate-y-1 hover:text-pomegranate-500 focus:text-pomegranate-500"
              to={"/popular"}
            >
              <p>popular</p>
            </Link>
            <Link
              className="hover:translate-y-1 hover:text-pomegranate-500 focus:text-pomegranate-500"
              to={"/unpopular"}
            >
              <p>unpopular</p>
            </Link>
          </ul>
        </div>
        <div className="  w-1/4 flex justify-end content-center  font-sans relative">
          {logged && (
            <p className=" absolute capitalize top-1/3 right-12 sm:right-28  lg:right-32 text-lg my-auto flex justify-center font-semibold ">
              {userName}
            </p>
          )}
          {!logged && (
            <button className=" absolute  w-30 h-8 sm:h-8 md:h-8  lg:h-10  top-1/3 sm:top-1/3 md:top-1/3 lg:top-1/4 right-8  bg-pomegranate-500 sm:text-md lg:text-xl rounded-md shadow-lg hover:bg-pomegranate-600 ">
              <Link to={"/login"}>
                <p className="mx-3 text-white  ">Login</p>
              </Link>
            </button>
          )}
          {logged && (
            <button
              className=" absolute m-auto  w-30 top-1/3 sm:top-1/3 md:top-1/3 lg:top-1/4 right-8  sm:h-8 lg:h-10 bg-pomegranate-500 sm:text-md lg:text-xl rounded-md"
              onClick={() => logOut()}
            >
              <p className="mx-3 text-white">LogOut</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
