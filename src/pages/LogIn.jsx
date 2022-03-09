import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";

function LogIn() {
  const { userVerify, logged, userName } = useContext(userContext);
  const log = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    userVerify(email.value, password.value);
    email.value = "";
    password.value = "";

  };
  return (
    <div className=" translate-y-28">
      <p>{logged&& "Bienvenido " + userName}</p>

      <form onSubmit={log}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button className="border-2 border-slate-900">Enviar</button>
        <button>
          <Link to={"/singup"}>Register</Link>
        </button>
      </form>
    </div>
  );
}

export default LogIn;
