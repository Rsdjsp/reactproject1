import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";
import { SiThemoviedatabase } from "react-icons/si";

function Navbar() {
  const { logOut, logged, userName } = useContext(userContext);

  return (
    <>
      <div className="bg-heather-400 flex w-screen h-20  max-w-full fixed z-10 ">
        <div className="flex-row justify-center content-center w-1/4">
          <Link to={"/"}>
            <SiThemoviedatabase className="text-6xl m-auto text-pomegranate-500 mt-3" />
          </Link>
        </div>
        <div className=" w-2/4 text-slate-900  flex justify-center  ">
          <ul className=" relative font-sans columns-3 flex-row   m-auto capitalize w-full text-center font-bold text-2xl">
            <Link to={"/"}>
              <p>recent</p>
            </Link>
            <Link to={"/"}>
              <p>popular</p>
            </Link>
            <Link to={"/"}>
              <p>unpopular</p>
            </Link>
          </ul>
        </div>
        <div className="  w-1/4 flex justify-end content-center  font-sans">
          {logged && <p className=" translate-x-40 text-lg my-auto flex justify-center font-semibold ">{userName}</p>}
          {!logged && (
            <button className=" relative m-auto w-30 translate-x-20 h-10 bg-pomegranate-500 text-xl rounded-md ">
              <Link to={"/login"}>
                <p className="mx-3 text-white">Login</p>
              </Link>
            </button>
          )}
          {logged && (
            <button
              className=" relative m-auto w-30 translate-x-20 h-10 bg-pomegranate-500 text-xl rounded-md"
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
