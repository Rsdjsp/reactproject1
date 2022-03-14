import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { userContext } from "../context/UserContext";

function Modal({ userName }) {
  const { setModal } = useContext(userContext);
  if (userName !== "alert") {
    return (
      <>
        <div className=" absolute items-center justify-center w-screen  h-full min-h-screen overflow-hidden  bg-slate-600 z-20 top-0 left-0 bg-opacity-50">
          <div className=" flex justify-center relative  w-2/5 h-1/3 bg-white rounded-md shadow-xl top-1/3 left-1/3 -ml-10 ">
            <h1 className="font-sans m-auto text-2xl">
              Bienvenido{" "}
              <span className="text-pomegranate-500 capitalize">{userName}</span>
            </h1>
          </div>
        </div>
      </>
    );
  } else if (userName === "alert") {
    return (
      <>
        <div className=" absolute items-center justify-center w-screen  h-full  overflow-visible  bg-slate-600 z-20 top-0 left-0 bg-opacity-50 ">
          <div className=" flex justify-center relative  w-2/5 h-1/3 bg-white rounded-md shadow-xl top-1/3 left-1/3 -ml-10 ">
            <h1 className="font-sans m-auto text-2xl">
              Please {""}
              <Link to={"/"}>
                <span className="font-bold text-pomegranate-500 hover:underline hover:underline-offset-2">
                  Log in {""}
                </span>
              </Link>
              to comment in the app
            </h1>
            <button
              className="absolute top-2 right-2 text-3xl hover:text-pomegranate-500"
              onClick={() => setModal(false)}
            >
              <GrFormClose />
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return <p>""</p>;
  }
}

export default Modal;
