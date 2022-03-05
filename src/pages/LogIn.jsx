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
    <div className="page">
      <p>{logged&& "Bienvenido " + userName}</p>

      <form onSubmit={log}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button>Enviar</button>
        <button>
          <Link to={"/singup"}>Register</Link>
        </button>
      </form>
    </div>
  );
}

export default LogIn;
