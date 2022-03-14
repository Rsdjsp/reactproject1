import React, { useContext } from "react";
import { userContext } from "../context/UserContext";
import { SiThemoviedatabase } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { animateScroll as scroll } from "react-scroll";

function SingUp() {
  const { userReg, userName } = useContext(userContext);
  const { modal, setModal } = useContext(userContext);

  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
    const { firstname, lastname, birthdate, city, email, password } =
      event.target;
    userReg(
      firstname.value,
      lastname.value,
      birthdate.value,
      city.value,
      email.value,
      password.value
    );
    firstname.value = "";
    lastname.value = "";
    birthdate.value = "";
    city.value = "";
    email.value = "";
    password.value = "";
    setModal(true);
    setTimeout(() => {
      navigate("/");
      setModal(false);
    }, 2000);
    scroll.scrollToTop();
  };

  return (
    <div className=" flex bg-gradient-to-tl from-heather-600 to-heather-500 h-full min-h-screen w-screen overflow-y-hidden">
      {modal && <Modal userName={userName} />}
      <div className="bg-slate-50 w-full max-w-3/4 justify-center mx-28 h-fit  max-h-3/4 flex text-slate-800  mt-32 font-sans shadow-xl rounded-md border-2 border-pomegranate-500">
        <section className="flex  w-fit justify-center text-center ">
          <article className="items-center pt-40">
            <SiThemoviedatabase className="text-9xl text-pomegranate-500 m-auto " />
            <p className="w-3/4 m-auto text-xl text-slate-800 font-semibold">
              Enjoy your favorite movies reviews in one site.
            </p>
          </article>
        </section>
        <section className="flex font-semibold w-4/6  text-lg">
          <form
            onSubmit={registerUser}
            className="flex-row w-full my-auto mx-6"
          >
            <h2 className="w-full text-center font-bold text-4xl mt-8 mb-10 ">
              Sign Up
            </h2>
            <p className="text-slate-600 text-lg mb-5">Create your account.</p>
            <div className="grid grid-flow-col grid-cols-2 gap-3">
              <article>
                <label>Firstname:</label>
                <input
                  type="text"
                  name="firstname"
                  required
                  className="w-full capitalize shadow-md mb-4 border-2 h-9 border-slate-400 rounded-md bg-white focus:border-pomegranate-400 outline-none"
                />
              </article>
              <article>
                <label>Lastname:</label>
                <input
                  type="text"
                  name="lastname"
                  required
                  className="w-full capitalize shadow-md mb-4 border-2 h-9 border-slate-400 rounded-md bg-white focus:border-pomegranate-400 outline-none"
                />
              </article>
            </div>
            <div className="grid grid-flow-col grid-cols-2  gap-3">
              <article>
                <label>Birthdate:</label>
                <input
                  type="date"
                  name="birthdate"
                  required
                  className="w-full pl-1 shadow-md mb-4 border-2 h-9 border-slate-400 rounded-md bg-white focus:border-pomegranate-400 outline-none"
                />
              </article>
              <article>
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full  capitalize pl-1 mb-4 shadow-md border-2 h-9 border-slate-400 rounded-md bg-white focus:border-pomegranate-400 outline-none"
                />
              </article>
            </div>
            <div className="grid grid-flow-col grid-cols-2  gap-3">
              <article>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full shadow-md mb-4 border-2 h-9 border-slate-400 rounded-md bg-white focus:border-pomegranate-400 outline-none"
                />
              </article>
              <article className="mb-10">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full shadow-md mb-4 border-2 h-9 border-slate-400 rounded-md bg-white focus:border-pomegranate-400 outline-none"
                />
              </article>
            </div>
            <div className="w-full text-center mb-8">
              <button className="bg-pomegranate-500 text-2xl  rounded-md shadow-lg hover:bg-pomegranate-400 text-slate-50 px-4 py-1">
                Register
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default SingUp;
