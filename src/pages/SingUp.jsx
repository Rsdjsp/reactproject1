import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../context/UserContext";

function SingUp() {
  const { user, setUser } = useContext(userContext);
  const singIn = (event) => {
    event.preventDefault();
    const { firstname, lastname, birthdate, city, email, password } =
      event.target;

    console.log(email.value, password.value);

    fetch("https://movies-341014.ue.r.appspot.com/auth/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        birthdate: birthdate.value,
        city: city.value,
        email: email.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        setUser({ logged: true, name: user.data.firstName });
      });

   
      
     
  };

  return (
    <div>
      <form onSubmit={singIn}>
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
