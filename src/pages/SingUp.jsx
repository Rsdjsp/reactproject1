import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../context/UserContext";

function SingUp() {
  const { userReg } = useContext(userContext);

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
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <input type="text" name="firstname" placeholder="Firstname" required />
        <input type="text" name="lastname" placeholder="Lastname" required />
        <input type="date" name="birthdate" placeholder="Birthdate" required />
        <input type="text" name="city" placeholder="City" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default SingUp;
