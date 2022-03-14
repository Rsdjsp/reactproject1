import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";
import { SiThemoviedatabase } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { animateScroll as scroll } from "react-scroll";

function LogIn() {
  const { userVerify, userName } = useContext(userContext);
  const navigate = useNavigate();
  const { modal, setModal } = useContext(userContext);
  const log = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    userVerify(email.value, password.value);
    email.value = "";
    password.value = "";
    setModal(true);
    setTimeout(() => {
      navigate(-1);
      setModal(false);
    }, 2000);
    scroll.scrollToTop();
  };

  return (
    <>
      {modal && <Modal userName={userName} />}
      <div className="flex items-center justify-center h-full min-h-screen w-screen bg-gradient-to-tl from-heather-600 to-heather-500 pt-10 ">
        <div className=" rounded-md flex-row items-center font-sans border-pomegranate-500 w-fit max-w-1/3 h-fit   lg:max-h-3/4 m-auto relative opacity-100 bg-slate-50 shadow-xl border-2 ">
          <div className="   mt-10   items-center  flex mx-16">
            <p className="text-left mr-2">
              <SiThemoviedatabase className="text-8xl text-pomegranate-500" />
            </p>
            <p className="text-start  text-slate-900 text-4xl font-bold mb-2 ">
              Sign in <br></br>
              <span className="text-lg text-slate-800 font-semibold capitalize">
                to continue in the app.
              </span>
            </p>
          </div>

          <form onSubmit={log} className="m-auto w-3/4 mt-8 ">
            <label className="text-xl">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full shadow-md  mb-4 border-2 h-9 border-slate-400 rounded-md bg-white focus:border-pomegranate-400 outline-none"
            />
            <label className="text-xl">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full shadow-md mb-4 h-9 border-2 border-slate-400 bg-white rounded-md focus:border-pomegranate-400 outline-none"
            />
            <div className="text-center w-full mt-12">
              <button className="bg-pomegranate-500 text-2xl  rounded-md shadow-lg hover:bg-pomegranate-400 text-slate-50 px-4 py-1">
                Login
              </button>
            </div>
            <div className="text-center w-full  mt-10 mb-4">
              <p className="text-center capitalize text-pomegranate-500 font-semibold text-lg ">
                you don't have acount?
                <span className="font-bold text-slate-900 text-xl hover:underline-offset-2 hover:underline">
                  <Link to={"/singup"}> Sing Up</Link>
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
